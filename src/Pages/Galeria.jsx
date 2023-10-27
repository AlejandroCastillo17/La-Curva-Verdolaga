import styles from "../styles/Galeria.css"
import imagen1 from "../assets/imagenes/nal1.jpg"
import imagen2 from "../assets/imagenes/nal2.jpg"
import imagen3 from "../assets/imagenes/nal3.jpg"
import imagen4 from "../assets/imagenes/nal4.jpg"
import imagen5 from "../assets/imagenes/nal5.jpg"
import imagen6 from "../assets/imagenes/nal6.jpeg"
import imagen7 from "../assets/imagenes/nal7.jpg"
import imagen8 from "../assets/imagenes/nal8.jpg"
import imagen9 from "../assets/imagenes/nal9.jpeg"

const Galeria = () => {

    return (
        <>
            <section className="Galeria">
                <h1 className="Galeria__h1">Galeria</h1>
                <ul id="Galeria__ul">
                    <li><img className="img" src={imagen1} alt="" /></li>
                    <li><img className="img" src={imagen2} alt="" /></li>
                    <li><img className="img" src={imagen3} alt="" /></li>
                </ul>
                <br />
                <ul id="Galeria__ul">
                    <li><img className="img" src={imagen4} alt="" /></li>
                    <li><img className="img" src={imagen5} alt="" /></li>
                    <li><img className="img" src={imagen6} alt="" /></li>
                </ul>
                <br />
                <ul id="Galeria__ul">
                    <li><img className="img" src={imagen7} alt="" /></li>
                    <li><img className="img" src={imagen8} alt="" /></li>
                    <li><img className="img" src={imagen9} alt="" /></li>
                </ul>
            </section>
        </>
    )
}
export default Galeria;