import contexto from "./MeuContexto"
import { useContext } from "react"


const Quixada = () => {
    let contador = useContext(contexto)

    return (
        <>
            <h1>Quixadá: {contador} </h1>
        </>
    )
}


export default Quixada