import contexto from "./MeuContexto"
import { useContext } from "react"


const Quixeramobim = () => {
    let contador = useContext(contexto)

    return (
        <>
            <h1>Quixeramobim: {contador} </h1>
        </>
    )
}


export default Quixeramobim