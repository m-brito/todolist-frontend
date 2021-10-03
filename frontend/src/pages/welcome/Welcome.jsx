import { Link } from 'react-router-dom';
import './styles.css';

function Welcome() {
  return (
    <div className="container">
      <div className="header">
        <Link to="/home">
          <button>Começar</button>
        </Link>
      </div>
      <div className="conteudo">
        <p>Se organize <br />com o To-Do List</p>
        <img src="./assets/logo.svg" alt="logo" />
      </div>
    </div>
  );
}

export default Welcome;