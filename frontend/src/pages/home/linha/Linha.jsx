import { BASE_URL } from "../../../utils/config";

const Linha = ({ dadosLinha, updateTarefas }) => {
    const excluirTarefa = async () => {
        await fetch(`${BASE_URL}/lists/delete?id=${dadosLinha.id}`, {
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
    return (
        <tr key={dadosLinha.id} className={dadosLinha.feito === false ? "incompleta" : "completa"}>
            <td>{dadosLinha.datainicio}</td>
            <td>{dadosLinha.tarefa}</td>
            <td>{dadosLinha.prazofinal}</td>
            <td>
                <button>E</button>
                <button onClick={() => mudarFeito(!dadosLinha.feito)}>F</button>
                <button onClick={excluirTarefa}>Ex</button>
            </td>
        </tr>
    );
}

export default Linha;