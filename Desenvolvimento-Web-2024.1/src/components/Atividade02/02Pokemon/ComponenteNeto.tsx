import ThemeContext from "./MeuContexto"
import { useContext } from "react"

const ComponenteNeto = () => {
    let numero = useContext(ThemeContext) + 2
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'
    return (
        <>
        <h1>Componente Neto</h1>
            <img src={url} alt="Pokemon" width={200}></img>
        </>
    )
}

export default ComponenteNeto