import contexto from "./MeuContexto"
import { useContext } from "react"


const Fortaleza = () => {
    let contador = useContext(contexto)

    return (
        <>
            <h1>Fortaleza: {contador} </h1>
        </>
    )
}

export default Fortaleza