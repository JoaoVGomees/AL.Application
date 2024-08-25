import React from "react";
import "./styles.css";
import { AreaCadastro } from "../../components/SignUp/SignUpArea";
import { AreaImagemPerfil } from "../../components/SignUp/ChosePicArea";

export default function Cadastro() {
    return(
        <div className="cadastro-pagina">
            <AreaCadastro />
            <AreaImagemPerfil />
        </div>
    );
}