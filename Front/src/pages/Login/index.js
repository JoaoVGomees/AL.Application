import './styles.css';
import { RiArrowLeftCircleFill } from "react-icons/ri";
import React, { useState } from 'react';

export function LoginPage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="container">
      <div className="containerInput">
        
        <button className="buttonClosed">
          <RiArrowLeftCircleFill className= "buttonTouch" /*onClick={}*/ />
        </button>

        <h1 className="title">LOGIN</h1>

        <div className='contInput'>
          <input
            type="text"
            placeholder="Usuário"
          />
          <input
            type="password"
            placeholder="Senha"
          />
          <p>
            Esqueci minha senha
          </p>
        </div>

        <div className='checkList'>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Lembrar usuário e senha
          </label>
        </div>

        <div className="cadastro">
          <p> Não tem conta?</p>

          <div className="contLink">
            <h2> Cadastre-se</h2>
          </div>
        </div>

        <button className="buttonSearch">
          AVANÇAR
        </button>
      </div>
    </div>
  );
}

export default LoginPage;