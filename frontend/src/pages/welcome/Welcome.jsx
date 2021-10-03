import { Link } from 'react-router-dom';
import './styles.css';

const Welcome = () => {
  return (
    <div className="container-welcome">
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