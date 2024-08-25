import React from "react";
import "./styles.css";
import { CamposCadastro } from "./SignUpLabels";
import { BotaoCadastro } from "./SignUpButton";
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export function AreaCadastro() {
    return(
        <div className="cadastro-area">
            <div className="cadastro-icone-fechar-area">
                <Link className="cadastro-icone-link" to={"/"}>
                    <RiArrowLeftCircleFill className="cadastro-icone-fechar" alt="Fechar" />
                </Link>
            </div> 
            <h1 className="cadastro-area-titulo">Cadastro</h1>
            <CamposCadastro title={"Nome completo"} placeholder={"Seu nome"} type={"text"} />
            <CamposCadastro title={"Data de nascimento"} type={"date"} />
            <CamposCadastro title={"Usuário"} placeholder={"Usuário"} type={"text"} />
            <CamposCadastro title={"Senha"} placeholder={"Senha"} type={"password"} />
            <BotaoCadastro />
        </div>
    );
}