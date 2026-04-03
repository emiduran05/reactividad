import React from "react";
import "./userSelection.css";


export default function Userselection() {

    return (
        <>

        <div className="main_content">
            <h1>User selection Whatsapp simulator</h1>
            <h2>Selecciona un usuario:</h2>

            <div className="users">

                <div className="user_container">
                    <p>Emiliano Durán <span>A01638902</span></p>
                    <a href="/whatsapp/emi">Ir al perfil</a>
                </div>

                <div className="user_container">
                    <p>Wendy del Carmen Martinez <span>A01645818</span></p>
                    <a href="/whatsapp/wendy">Ir perfil</a>
                </div>
            </div>
        </div>
            

        </>
    )
}