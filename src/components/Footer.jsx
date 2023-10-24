import { AiFillInstagram, AiFillFacebook, AiFillGithub, } from "react-icons/ai";
import styles from "../styles/Footer.css"

const Footer = () => {

    return (
        <>
            <section className="Footer">
                <h1 className="Footer__h1">Diego Alejandro Castillo Perez</h1>
                <br />
                <ul className="Footer__Ul">
                    <li className="Ul__li"><a href=""><AiFillInstagram size={"40px"}/></a></li>
                    <li className="Ul__li"><a href=""><AiFillFacebook size={"40px"}/></a></li>
                    <li className="Ul__li"><a href=""><AiFillGithub size={"40px"}/></a></li>
                    <br />
                </ul>
                <br />
                <ul className="Footer__Ul">
                    <li className="Ul_li"> diegoalejandrocastilloperez@gmail.com</li>
                    <li className="Ul_li">+57 3004021102 </li>
                </ul>
                <p className="Footer__p">© 2023 LaCurvaVerdolaga.com. Todos los derechos reservados.</p>
            </section>
        </>
    )
}
export default Footer;