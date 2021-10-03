const Linha = ({ dadosLinha, updateTarefas }) => {
    const excluirTarefa = async () => {
        await fetch(`https://todolist-mauricio.herokuapp.com/lists/delete?id=${dadosLinha.id}`, {
            "method": "DELETE"
        })
        await updateTarefas();
    }
    return (
        <tr key={dadosLinha.id}>
            <td>{dadosLinha.datainicio}</td>
            <td>{dadosLinha.tarefa}</td>
            <td>{dadosLinha.prazofinal}</td>
            <td>
                <button>E</button>
                <button>F</button>
                <button onClick={excluirTarefa}>Ex</button>
            </td>
        </tr>
    );
}

export default Linha;