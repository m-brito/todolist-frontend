import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/config';
import FormCadastro from './formCadastro/FormCadastro';
import FormEdita from './formEdita/FormEdita';
import Linha from './linha/Linha';
import './styles.css';

const Home = ({ ip }) => {
  const [tarefas, setTarefas] = useState([]);
  const [formActive, setFormActive] = useState(false);
  const [formEditarActive, setFormEditarActive] = useState(false);
  const [idEditar, setIdEditar] = useState()

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

  const openFormModal = (active) => {
    setFormActive(active);
  }

  const openEditaFormModal = (id) => {
    setIdEditar(id);
    setFormEditarActive(!formEditarActive);
  }

  return (
    <div className="container-home">
      <FormCadastro ip={ip} setFormActive={setFormActive} formActive={formActive} updateTarefas={getTarefas} />
      {tarefas.length>0 && idEditar && <FormEdita ip={ip} tarefas={tarefas} idEditar={idEditar} formEditarActive={formEditarActive} setFormEditarActive={setFormEditarActive} setIdEditar={setIdEditar} updateTarefas={getTarefas} />}
      <button id="novo" onClick={() => openFormModal(!formActive)}>Novo +</button>
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
          {tarefas.map((tarefa) => <Linha key={tarefa.id} dadosLinha={tarefa} updateTarefas={getTarefas} openEditaFormModal={openEditaFormModal} />)}
        </tbody>
      </table>
    </div>
  );
}

export default Home;