package com.example.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.FirebaseApp;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import com.example.demo.model.mensaje;
import com.google.firebase.cloud.FirestoreClient;
import com.google.cloud.firestore.DocumentChange;

import jakarta.annotation.PostConstruct;


@Service
public class MensajeService {
    @Autowired
    private FirebaseApp firebaseApp;

    public List<mensaje> getMensajesIniciales() throws Exception {

        Firestore db = FirestoreClient.getFirestore(firebaseApp);

        ApiFuture<QuerySnapshot> future = db.collection("mensajes").orderBy("timestamp").get();

        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        List<mensaje> lista = new ArrayList<>();

        for (DocumentSnapshot doc : documents) {
            mensaje mensaje = doc.toObject(mensaje.class);
            lista.add(mensaje);
        }

        return lista;
    }

   public void guardarEnFirebase(mensaje mensaje) throws Exception {
    Firestore db = FirestoreClient.getFirestore(firebaseApp);

    db.collection("mensajes")
      .add(mensaje)
      .get();
}


@PostConstruct
public void escucharMensajes() {
    Firestore db = FirestoreClient.getFirestore(firebaseApp);

    db.collection("mensajes")
      .orderBy("timestamp") 
      .addSnapshotListener((snap, error) -> {

        if (error != null) {
            error.printStackTrace();
            return;
        }

        if (snap != null) {
            for (DocumentChange change : snap.getDocumentChanges()) {

                // 🔥 SOLO nuevos mensajes
                if (change.getType() == DocumentChange.Type.ADDED) {

                    mensaje nuevo = change.getDocument().toObject(mensaje.class);

                    System.out.println("Nuevo mensaje: " + nuevo.getMensaje());

                    enviarASuscriptores(nuevo);
                }
            }
        }
    });
}


private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();

public SseEmitter agregarCliente() {
    SseEmitter emitter = new SseEmitter(Long.MAX_VALUE);

    emitters.add(emitter);

    emitter.onCompletion(() -> emitters.remove(emitter));
    emitter.onTimeout(() -> emitters.remove(emitter));

    return emitter;
}

private void enviarASuscriptores(mensaje mensaje) {
    for (SseEmitter emitter : emitters) {
        try {
            emitter.send(mensaje);
        } catch (Exception e) {
            emitters.remove(emitter);
        }
    }
}

}
