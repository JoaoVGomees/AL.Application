import React, { useRef } from "react";
import "./styles.css";
import { CamposCadastro } from "./SignUpLabels";
import { BotaoCadastro } from "./SignUpButton";
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export function AreaCadastro() {
    const nameRef = useRef(null);
    const dataNascRef = useRef(null);
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <div className="cadastro-area">
            <div className="cadastro-icone-fechar-area">
                <Link className="cadastro-icone-link" to={"/"}>
                    <RiArrowLeftCircleFill className="cadastro-icone-fechar" alt="Fechar" />
                </Link>
            </div>
            <h1 className="cadastro-area-titulo">Cadastro</h1>
            <CamposCadastro title="Nome completo" placeholder="Seu nome" type="text" ref={nameRef} />
            <CamposCadastro title="Data de nascimento" type="date" ref={dataNascRef}/>
            <CamposCadastro title="Usuário" placeholder="Usuário" type="text" ref={userNameRef} />
            <CamposCadastro title="Senha" placeholder="Senha" type="password" ref={passwordRef} />
            <BotaoCadastro
                inputName={nameRef}
                inputUserName={userNameRef}
                inputDataNasc={dataNascRef}
                inputPassword={passwordRef}
            />
        </div>
    );
}
