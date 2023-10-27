import imagen from "../assets/imagenes/copaliga.png"
import imagen2 from "../assets/imagenes/copacopa.png"
import imagen3 from "../assets/imagenes/copasuperliga.png"
import imagen4 from "../assets/imagenes/copalibertadores.png"
import imagen5 from "../assets/imagenes/interamericana.png"
import imagen6 from "../assets/imagenes/copamerconorte.png"
import imagen7 from "../assets/imagenes/recopasudamericana.png"
import style from "../styles/Titulos.css"

const Titulos = () => {

    return (

        <> 
            <section className="Titulos">
                <h1 className="Titulos__h1"> Titulos Nacionales </h1>
                <ul className="Titulos__ul1">
                    <li id="Ul__li">
                        <h2 id="Li_h2"> Ligas Colombianas: 17 </h2>
                        <img id="Li_img" src={imagen} alt="" />
                    </li>
                    <li>
                        <h2 id="Li_h2"> Copa de la Liga: 5 </h2>
                        <img id="Li_img" src={imagen2} alt="" />
                    </li>
                    <li>
                        <h2 id="Li_h2"> Superliga Colombiana: 3 </h2>
                        <img id="Li_img1" src={imagen3} alt="" />
                    </li>
                </ul>
                <br />
                <h1 className="Titulos__h1"> Titulos Internacionales </h1>
                <ul className="Titulos__ul">
                    <li id="Ul__li">
                        <h2 id="Li_h2"> Copa Libertadores: 2 </h2>
                        <img id="Li_img" src={imagen4} alt="" />
                    </li>
                    <li>
                        <h2 id="Li_h2"> Copas Interamericana: 2 </h2>
                        <img id="Li_img" src={imagen5} alt="" />
                    </li>
                    <li>
                        <h2 id="Li_h2"> Copa Merconorte: 2 </h2>
                        <img id="Li_img" src={imagen6} alt="" />
                    </li>
                    <li>
                        <h2 id="Li_h2"> Recopa Sudamericana: 1 </h2>
                        <img id="Li_img" src={imagen7} alt="" />
                    </li>
                </ul>
            </section>    
        </>
    )
}

export default Titulos;