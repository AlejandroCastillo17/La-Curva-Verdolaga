import style from "../styles/InicioSesion.css"

const InicioSesion = () => {
    return (
        <>
            <section className="InicioSesion">
                <div className="InicioSesion__Div">
                    <form action="InicioSesion">
                        <label htmlFor="Usuario">Usuario </label>
                        <input type="text" id="usuario" name="usuario" required/>
                        <br />
                        <br />
                        <label htmlFor="Contraseña">Contraseña </label>
                        <input type="text" id="contraseña" name="contraseña" required/>
                        <br />
                        <br />
                        <br />
                        <br />
                        <input type="submit" id="submit" value={"iniciar sesion"}/>
                    </form>
                </div>
            </section>
        </>
    )
}

export default InicioSesion;