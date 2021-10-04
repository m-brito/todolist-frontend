import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/config';
import Linha from './linha/Linha';
import './styles.css';

const Home = ({ ip }) => {
  const[tarefas, setTarefas] = useState([]);

  useEffect(() => {
    getTarefas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getTarefas() {
    const resp = await fetch(`${BASE_URL}/lists/get-ip?ip=${ip}`, {
        "method": "GET"
    });
    const listaTarefas = await resp.json();
    setTarefas(listaTarefas);
  }

  return (
    <div className="container-home">
      <button id="novo">Novo +</button>
      <h1>To Do List</h1>
      <table>
        <thead>
          <tr>
            <th>Data Inicio</th>
            <th>Tarefa</th>
            <th>Prazo Final</th>
            <th>Ferramentas</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => <Linha key={tarefa.id} dadosLinha={tarefa} updateTarefas={getTarefas}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default Home;