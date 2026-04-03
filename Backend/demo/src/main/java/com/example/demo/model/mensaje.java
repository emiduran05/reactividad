package com.example.demo.model;

public class mensaje {
    private String texto;
    private String emisor;
    private String hora;

    public mensaje() {} 

    public String getTexto() { return texto; }
    public void setTexto(String texto) { this.texto = texto; }

    public String getEmisor() { return emisor; }
    public void setEmisor(String emisor) { this.emisor = emisor; }

    public String getHora() { return hora; }
    public void setHora(String hora) { this.hora = hora; }
}