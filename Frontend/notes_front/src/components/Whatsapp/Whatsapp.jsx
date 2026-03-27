import "./Whatsapp.css";
// import { useParams } from "react-router-dom";


export default function Whatsapp(){
    //  const { user } = useParams();


    return(
        <>
            <div className="main_content_w">

                <div className="chats">
                    <div className="chats_container">
                        <h2>Whatsapp Simulator</h2>

                        <input type="text" placeholder="Buscar un chat o iniciar uno nuevo"/>

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

                        <div className="chats_box">

                        </div>
                    </div>

                </div>

                <div className="messages">

                </div>
            </div>
        </>
    )
}