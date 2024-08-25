import React from "react";
import "./styles.css";
import logo from "../../assets/logo-animelink.svg";
import BotoesHome from "./HomeButtons";

export default function HomeArea() {
    return (
        <div>
            <header className="home-header">
                <img className="home-header-logo" src={logo} alt="AnimeLink" />
                <div className="home-header-text">
                    <h1 className="home-header-titulo">AnimeLink</h1>
                    <h2 className="home-header-intro">Entre ou cadastre-se para diversão em primeira mão</h2>
                    <BotoesHome />
                </div>
            </header>
            <main>
                
            </main>
        </div>
    );
}