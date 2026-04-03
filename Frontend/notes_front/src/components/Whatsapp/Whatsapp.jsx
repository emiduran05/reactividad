import React from "react";

import "./Whatsapp.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Whatsapp() {
    const { user } = useParams();


    const [message, setMessage] = useState("");
    const [mensajes, setMensajes] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/mensajes");
            const data = await res.json();

            setMensajes(data);
        } catch (error) {
            console.error("Error cargando mensajes:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const eventSource = new EventSource("http://localhost:8080/mensajes/stream");

        eventSource.onmessage = (event) => {
            const nuevo = JSON.parse(event.data);

            setMensajes(prev => [...prev, nuevo]);
        };

        eventSource.onerror = (error) => {
            console.error("Error SSE:", error);
            eventSource.close();
        };

        return () => eventSource.close();
    }, []);







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

                                {user == "wendy" ?
                                    <img src="https://media-qro3-1.cdn.whatsapp.net/v/t61.24694-24/637221389_4239633459585497_6720373686029264783_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4AEkN9dqmvM3PP-VloTbm7rR-IvNQfvl1-tYWRW0S40lyw&oe=69DC56F6&_nc_sid=5e03e0&_nc_cat=102" alt="imagenEmi" />

                                    :
                                    <img src="https://media-qro3-1.cdn.whatsapp.net/v/t61.24694-24/656649225_957827116677806_2311386092607169555_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4AGsgBEIXNlZL_GorgSrk3IhKIETbkCFtrF1sFwjakFbnA&oe=69D04604&_nc_sid=5e03e0&_nc_cat=101" alt="" />

                                }


                            </div>

                            <div className="user_info">

                                <div className="user_hora">
 {
                                    user == "wendy" ? <p>Emi</p> : <p>Wendy</p>
                                }                                    <span>9:20 p.m.</span>
                                </div>

                                <div className="message">
                                    {mensajes.at(-1)?.emisor == user ? <div className="delivered">
                                        <i className="fa-solid fa-check"></i>
                                        <i className="fa-solid fa-check"></i>
                                    </div>

                                        :

                                        <span style={{ display: "none" }}></span>

                                    }


                                    <span>{mensajes.at(-1)?.mensaje}</span>
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
                                    {user == "wendy" ?
                                        <img src="https://media-qro3-1.cdn.whatsapp.net/v/t61.24694-24/637221389_4239633459585497_6720373686029264783_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4AEkN9dqmvM3PP-VloTbm7rR-IvNQfvl1-tYWRW0S40lyw&oe=69DC56F6&_nc_sid=5e03e0&_nc_cat=102" alt="imagenEmi" />

                                        :
                                        <img src="https://media-qro3-1.cdn.whatsapp.net/v/t61.24694-24/656649225_957827116677806_2311386092607169555_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4AGsgBEIXNlZL_GorgSrk3IhKIETbkCFtrF1sFwjakFbnA&oe=69D04604&_nc_sid=5e03e0&_nc_cat=101" alt="" />

                                    }

                                </div>


                                {
                                    user == "wendy" ? <span>Emi</span> : <span>Wendy</span>
                                }

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

                                <div className="mensajes" key={index} style={{ justifyContent: item.emisor != user ? "flex-start" : "flex-end" }}>
                                    <div className="span_message" style={{ backgroundColor: item.emisor != user ? "#242626" : "#144D37", }}>
                                        <span className="span">{item.mensaje}</span>
                                        <div className="span_hora_container">
                                            <span className="span_hora">{item.hora}</span>

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
                                <i className="fa-solid fa-paper-plane mic" onClick={async () => {
                                    // setMensajes(prev => [
                                    //     ...prev,
                                    //     {
                                    //         mensaje: message,
                                    //         emisor: "emi",
                                    //         hora: new Date().toLocaleTimeString([], {
                                    //             hour: '2-digit',
                                    //             minute: '2-digit'
                                    //         })
                                    //     }
                                    // ])

                                    setMessage("")


                                    await fetch("http://localhost:8080/api/mensajes", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            mensaje: message,
                                            emisor: user,
                                            hora: new Date().toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            }),
                                            timestamp: Date.now()


                                        })
                                    });



                                }} ></i>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    );
}
