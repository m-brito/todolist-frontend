import { useState } from 'react';
import { BASE_URL } from '../../../utils/config';
import './styles.css';

const FormCadastro = ({ setFormActive, formActive, ip, updateTarefas }) => {
    const[campoTarefa, setCampoTarefa] = useState('');
    const[campoPrazoFinal, setCampoPrazoFinal] = useState('');

    const cadastrar = (event) => {
        event.preventDefault();
        postTarefa();
    }

    const close = (active, event) => {
        event.preventDefault();
        setFormActive(active);
    }

    async function postTarefa() {
        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        const dataAtual = `${ano}-${mes}-${dia}`;
        await fetch(`${BASE_URL}/lists/add`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "ip": ip,
                "tarefa": campoTarefa,
                "datainicio": dataAtual,
                "prazofinal": campoPrazoFinal
            })
        });
        await updateTarefas();
        setFormActive(!formActive);
        setCampoPrazoFinal('');
        setCampoTarefa('');
    }

    return (
        <div id="container-form-cadastro" className={formActive === true ? "active" : "disabled"}>
            <form onSubmit={(event) => cadastrar(event)}>
                <button id="close" onClick={(event) => close(!formActive, event)}>X</button>
                <h1>Cadastro</h1>
                <div className="group">
                    <label>Tarefa</label>
                    <textarea onChange={(event) => setCampoTarefa(event.target.value)} cols="30" rows="10" value={campoTarefa} required></textarea>
                </div>
                <div className="group">
                    <label>Prazo Final</label>
                    <input type="date" onChange={(event) => setCampoPrazoFinal(event.target.value)} value={campoPrazoFinal} required />
                </div>
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}

export default FormCadastro;