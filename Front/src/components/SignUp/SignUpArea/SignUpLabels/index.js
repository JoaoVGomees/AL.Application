import React, { forwardRef } from "react";
import "./styles.css";

export const CamposCadastro = forwardRef(({ title, placeholder, type }, ref) => {
    return (
        <div className="cadastro-campos">
            <label className="cadastro-label" htmlFor={title}>
                {title}
            </label>
            <input
                className="cadastro-input"
                id={title}
                placeholder={placeholder}
                type={type}
                ref={ref}
            />
        </div>
    );
});
