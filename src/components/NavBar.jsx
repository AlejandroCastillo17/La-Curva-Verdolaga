import styles from "../styles/NavBar.css"
import imagen from "../assets/imagenes/logoAN.png" 
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
    <>
        <section className="NavBar">
            <img className="NavBar__Img" src={imagen} alt=""/>
            <ul className="NavBar__Ul">
                <li className="Ul__Li"><Link className="link" to="/">Historia</Link> </li>
                <li className="Ul__Li"><Link className="link" to="/titulos">Titulos</Link></li>
                <li className="Ul__Li"><Link className="link" to="/galeria">Galeria</Link></li>
                <li className="Ul__Li"><Link className="link" to="/acercade">AcercaDe</Link></li>
                <li className="Ul__Li"><Link className="link" to="/login">InicioSesion</Link></li>
            </ul>
        </section>
    </>
    ) 
}
 export default NavBar;