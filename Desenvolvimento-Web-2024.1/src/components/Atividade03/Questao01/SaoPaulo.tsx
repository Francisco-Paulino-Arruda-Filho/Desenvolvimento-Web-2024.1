import contexto from "./MeuContexto"
import { useContext } from "react"

const SaoPaulo = () => {
    let contador = useContext(contexto)

    return (
        <>
            <h1>São Paulo: {contador} </h1>
        </>
    )
}

export default SaoPaulo