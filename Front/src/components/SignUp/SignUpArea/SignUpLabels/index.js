import React from "react";
import "./styles.css";

export function CamposCadastro({ title, placeholder, type }) {
    return(
        <div className="cadastro-campos">
            <label
                className="cadastro-label"
                htmlFor="cadastro-label"
            >
                {title}
            </label>
            <input 
                className="cadastro-input"
                id="cadastro-label"
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
}