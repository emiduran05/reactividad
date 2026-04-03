package com.example.demo.model;

public class mensaje {
    private String mensaje;
    private String emisor;
    private String hora;
    private long timestamp;

    public mensaje() {} 

    public String getMensaje() { return mensaje; }
    public void setMensaje(String mensaje) { this.mensaje = mensaje; }

    public String getEmisor() { return emisor; }
    public void setEmisor(String emisor) { this.emisor = emisor; }

    public String getHora() { return hora; }
    public void setHora(String hora) { this.hora = hora; }
    public long getTimestamp() { return timestamp; }
    public void setTimestamp(long timestamp) { this.timestamp = timestamp; }
}