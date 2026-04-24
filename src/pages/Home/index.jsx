import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return(
        <>
        <h2>Bem vindo ao meu sistem</h2>
        <Link to="/About">
        <button>About</button>
        </Link>
        </>
    )
}
export default Home