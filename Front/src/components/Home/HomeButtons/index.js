import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function BotoesHome() {
    return (
        <div className="home-botoes-area">
            <Link>
                <button className="home-login-botao">Login</button>
            </Link>
            <Link to={"/cadastro"}>
                <button className="home-cadastro-botao">Cadastro</button>
            </Link>
        </div>
    );
}