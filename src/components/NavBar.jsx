import styles from "../styles/NavBar.css"
import imagen from "../assets/imagenes/logoAN.png" 

const NavBar = () => {

    return(
    <>
        <section className="NavBar">
            <img className="NavBar__Img" src={imagen} alt=""/>
            <ul className="NavBar__Ul">
                <li className="Ul__Li"> Historia </li>
                <li className="Ul__Li"> Titulos </li>
                <li className="Ul__Li"> Galeria </li>
                <li className="Ul__Li"> Acerca De </li>
                <li className="Ul__Li">Iniciar Sesion</li>
            </ul>
        </section>
    </>
    ) 
}
 export default NavBar;