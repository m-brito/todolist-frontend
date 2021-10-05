import { BASE_URL } from '../../../utils/config';
import './styles.css';

const FormEdita = ( {formEditarActive, setFormEditarActive, idEditar, tarefas, setIdEditar, updateTarefas} ) => { 
    const tarefaEditar = tarefas.length>0 && tarefas.find((tarefa) => tarefa.id === idEditar);

    const editar = async (event, tarefa) => {
        event.preventDefault();
        await fetch(`${BASE_URL}/lists/patch?id=${tarefa.id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "tarefa": document.getElementById("tarefaEditada").value,
                "prazofinal": document.getElementById("prazoFinalEditado").value
            })
        });
        setIdEditar();
        setFormEditarActive(!formEditarActive);
        updateTarefas();
    }

    const close = (active, event) => {
        event.preventDefault();
        setFormEditarActive(active);
        setIdEditar()
    }

    return(
        <div id="container-form-edita" className={formEditarActive === true ? "active" : "disabled"}>
            <form onSubmit={(event) => editar(event, tarefaEditar)}>
                <button id="close" onClick={(event) => close(!formEditarActive, event)}>X</button>
                <h1>Editar</h1>
                <div className="group">
                    <label>Tarefa</label>
                    <textarea id="tarefaEditada" cols="30" rows="10" defaultValue={tarefaEditar.tarefa} required></textarea>
                </div>
                <div className="group">
                    <label>Prazo Final</label>
                    <input type="date" id="prazoFinalEditado" defaultValue={tarefaEditar.prazofinal} required />
                </div>
                <input type="submit" value="Editar" />
            </form>
        </div>
    )
}

export default FormEdita;