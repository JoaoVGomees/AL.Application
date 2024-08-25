import "./styles.css";
import api from "../../../../services/api";

export function BotaoCadastro({ inputName, inputUserName, inputDataNasc, inputPassword }) {
    const createUsers = async () => {
        try {
            await api.post('/usuarios', {
                nome: inputName.current.value,
                userName: inputUserName.current.value,
                dataNasc: inputDataNasc.current.value,
                senha: inputPassword.current.value,
            });
            
            console.log(
                inputName.current.value,
                inputUserName.current.value,
                inputDataNasc.current.value,
                inputPassword.current.value,
            );

            inputName.current.value = '';
            inputUserName.current.value = '';
            inputDataNasc.current.value = '';
            inputPassword.current.value = '';
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
        }
    };

    return (
        <div className="cadastro-botao-area">
            <button onClick={createUsers} className="cadastro-botao">Confirmar</button>
        </div>
    );
}
