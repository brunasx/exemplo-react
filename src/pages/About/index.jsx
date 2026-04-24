import { Link } from 'react-router-dom'
import './style.css'

function About (){
    return (
        <>
        <h2>Outra pagina</h2>
        <Link to="/Home">
        <button>Home</button>
        </Link>
        </>
    )
}

export default About