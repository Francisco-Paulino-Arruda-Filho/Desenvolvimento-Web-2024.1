import ThemeContext from "./MeuContexto"
import { useContext } from "react"
import ComponenteNeto from "./ComponenteNeto"

const ComponenteFilho = () => {
    let numero = useContext(ThemeContext) + 1
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'

    return (
        <>
            <h1>Componente Filho</h1>
            <img src={url} alt="Pokemon" width={200} ></img>
            <ComponenteNeto/>
        </>
    )
}

export default ComponenteFilho