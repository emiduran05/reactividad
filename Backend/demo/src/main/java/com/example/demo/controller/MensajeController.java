package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.example.demo.model.mensaje;

import com.example.demo.services.MensajeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;

@RestController
public class MensajeController {
    @Autowired
    private MensajeService mensajeService;

    @GetMapping("/api/mensajes")
    public List<mensaje> getMensajes() throws Exception {
        return mensajeService.getMensajesIniciales();
    }

    @PostMapping("/api/mensajes")
    public void enviarMensaje(@RequestBody mensaje mensaje) throws Exception {
        mensajeService.guardarEnFirebase(mensaje);
    }

    @GetMapping("/mensajes/stream")
    public SseEmitter stream() {
        return mensajeService.agregarCliente();
    }

}
