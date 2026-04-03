import React from "react";

import "./Whatsapp.css";
import { useState } from "react";
// import { useParams } from "react-router-dom";

export default function Whatsapp() {
    // const { user } = useParams();

    const [message, setMessage] = useState("");
    const [mensajes, setMensajes] = useState([
        {
            mensaje: "Hola, ¿cómo estás?",
            emisor: "wendy",
            hora: "10:00"
        },
        {
            mensaje: "Todo bien, ¿y tú?",
            emisor: "emi",
            hora: "10:01"
        },
        {
            mensaje: "Perfecto, gracias por preguntar",
            emisor: "wendy",
            hora: "10:02"
        },
        {
            mensaje: "¿En qué puedo ayudarte?",
            emisor: "emi",
            hora: "10:03"
        },

        {
            mensaje: "En nada",
            emisor: "wendy",
            hora: "10:05"
        }
    ])

    const [texto, setTexto] = useState("");



    return (
        <>
            <div className="main_content_w">

                <div className="chats">
                    <div className="chats_container">
                        <h2>Whatsapp Simulator</h2>

                        <div className="search" onClick={() => {
                            const divSearch = document.querySelector(".search");

                            divSearch.classList.toggle("border");
                        }}>
                            <i className="fa-brands fa-sistrix"></i>
                            <input type="text" placeholder="Buscar un chat o iniciar uno nuevo" />

                        </div>


                        <div className="categories">
                            <div className="categories_container">Todos</div>
                            <div className="categories_container">No leídos 0</div>
                            <div className="categories_container">Favoritos</div>
                            <div className="categories_container">Grupos 0</div>
                            <div className="categories_container"><i className="fa-solid fa-plus"></i></div>
                        </div>

                        <div className="archivados">
                            <i className="fa-solid fa-box-archive"></i>
                            <span className="archivados_span">Archivados</span>
                            <span className="number">4</span>
                        </div>

                        <div className="chat_box">
                            <div className="img_container">
                                <img src="https://media-qro3-1.cdn.whatsapp.net/v/t61.24694-24/656649225_957827116677806_2311386092607169555_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4AGsgBEIXNlZL_GorgSrk3IhKIETbkCFtrF1sFwjakFbnA&oe=69D04604&_nc_sid=5e03e0&_nc_cat=101" alt="" />
                            </div>

                            <div className="user_info">

                                <div className="user_hora">
                                    <p>WendyPato</p>
                                    <span>9:20 p.m.</span>
                                </div>

                                <div className="message">
                                    <div className="delivered">
                                        <i className="fa-solid fa-check"></i>
                                        <i className="fa-solid fa-check"></i>
                                    </div>

                                    <span>Holaaa</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="messages">
                    <div className="messages_container">
                        <div className="messages_header">

                            <div className="user_img_name">
                                <div className="img_name_container">
                                    <img src="https://media-qro3-1.cdn.whatsapp.net/v/t61.24694-24/656649225_957827116677806_2311386092607169555_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4AGsgBEIXNlZL_GorgSrk3IhKIETbkCFtrF1sFwjakFbnA&oe=69D04604&_nc_sid=5e03e0&_nc_cat=101" alt="" />
                                </div>

                                <span>WendyPato</span>
                            </div>

                            <div className="actions">
                                <div className="llamar">
                                    <i className="fa-solid fa-video"></i>
                                    <span>Llamar</span>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>

                                <i className="fa-solid fa-magnifying-glass"></i>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>

                        <div className="chat_cont" style={{ height: "2000vh" }}>

                            {mensajes.map((item, index) => (

                                <div className="mensajes" key={index} style={{ justifyContent: item.emisor == "wendy" ? "flex-start" : "flex-end" }}>
                                    <div className="span_message" style={{ backgroundColor: item.emisor == "wendy" ? "#242626" : "#144D37", }}>
                                        <span className="span">{item.mensaje}</span>
                                        <div className="span_hora_container">
                                            <span className="span_hora">{item.hora} p.m.</span>

                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="footer">
                        <i className="fa-solid fa-plus"></i>
                        <i className="fa-regular fa-note-sticky"></i>

                        <input
                            type="text"
                            id="message"
                            placeholder="Escribe un mensaje"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        {
                            message.trim() === "" ? (
                                <i className="fa-solid fa-microphone mic"></i>
                            ) : (
                                <i className="fa-solid fa-paper-plane mic" onClick={() => {
                                    setMensajes(prev => [
                                        ...prev,
                                        {
                                            mensaje: message,
                                            emisor: "emi",
                                            hora: new Date().toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })
                                        }
                                    ])
                                    
                                    setMessage("")
                                    

                                }} ></i>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    );
}
