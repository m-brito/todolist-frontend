import './styles.css';

import { BASE_URL } from "../../../utils/config";
import { formatLocalDate } from "../../../utils/format";

const Linha = ({ dadosLinha, updateTarefas, openEditaFormModal }) => {
    const excluirTarefa = async (id) => {
        await fetch(`${BASE_URL}/lists/delete?id=${id}`, {
            "method": "DELETE"
        })
        await updateTarefas();
    }
    const mudarFeito = async (feito) => {
        await fetch(`${BASE_URL}/lists/patch?id=${dadosLinha.id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "feito": feito
            })
        })
        await updateTarefas();
    }

    const editar = (id) => {
        openEditaFormModal(id);
    }
    return (
        // eslint-disable-next-line react/jsx-no-duplicate-props
        <tr key={dadosLinha.id} className={`c-linha ${dadosLinha.feito === false ? "incompleta" : "completa"}`}>
            <td>{formatLocalDate(dadosLinha.datainicio, "dd/MM/yyyy")}</td>
            <td className="l-tarefa"><p>{dadosLinha.tarefa}</p></td>
            <td>{formatLocalDate(dadosLinha.prazofinal, "dd/MM/yyyy")}</td>
            <td>
                <button onClick={() => editar(dadosLinha.id)}>E</button>
                <button onClick={() => mudarFeito(!dadosLinha.feito)}>F</button>
                <button onClick={() => excluirTarefa(dadosLinha.id)}>Ex</button>
            </td>
        </tr>
    );
}

export default Linha;