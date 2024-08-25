import React, { useState } from "react";
import "./styles.css";
import profilePic from "../../../assets/Images/SignUp/profile-pic-choosen.png";
import { AreaEscolhaImagem } from "./ChoosePic";

export function AreaImagemPerfil() {
    const [imgSelecionada, setImgSelecionada] = useState(null);
    const [trocaAnimacao, setTrocaAnimacao] = useState(false);

    const trocarDeImagem = (img) => {
        setTrocaAnimacao(true);

        setTimeout(() => {
            setImgSelecionada(img);
            setTrocaAnimacao(false);
        }, 300);
    };

    return(
        <div className="imagem-perfil-area">
            <h1 className="imagem-perfil-titulo">Escolha uma foto de perfil</h1>
            <img className={ `imagem-perfil-preview ${trocaAnimacao ? "imagem-perfil-animacao" : ""}` } src={imgSelecionada || profilePic} alt="Imagem de perfil" />
            <AreaEscolhaImagem setImgSelecionada={trocarDeImagem} />
        </div>
    );
}