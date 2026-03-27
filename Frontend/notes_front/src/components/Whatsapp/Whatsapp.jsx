import "./Whatsapp.css";
// import { useParams } from "react-router-dom";


export default function Whatsapp() {
    //  const { user } = useParams();


    return (
        <>
            <div className="main_content_w">

                <div className="chats">
                    <div className="chats_container">
                        <h2>Whatsapp Simulator</h2>

                        <input type="text" placeholder="Buscar un chat o iniciar uno nuevo" />

                        <div className="categories">
                            <div className="categories_container">Todos</div>
                            <div className="categories_container">No leídos 80</div>
                            <div className="categories_container">Favoritos</div>
                            <div className="categories_container">Grupos 30</div>
                            <div className="categories_container">+</div>
                        </div>

                        <div className="archivados">
                            <i class="fa-solid fa-box-archive"></i>
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
                                        <i class="fa-solid fa-check"></i>
                                        <i class="fa-solid fa-check"></i>

                                    </div>

                                    <span>Holaaa</span>

                                </div>


                            </div>

                           
                        </div>
                    </div>

                </div>

                <div className="messages">

                </div>
            </div>
        </>
    )
}