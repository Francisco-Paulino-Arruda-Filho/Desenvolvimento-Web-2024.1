import { useContext } from "react";
import ThemeContext from "./MeuContexto";
import ComponenteFilho from "./ComponenteFilho";

const ComponenteAvo = () => {
    let numero = useContext(ThemeContext)
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'

    return (
        <>
            <h1>Componente Avô</h1>
            <img src={url} alt="Pokemon" width={200} ></img>
            <ThemeContext.Provider value={numero}>
                <ComponenteFilho/>
            </ThemeContext.Provider>
        </>
    )
}

export default ComponenteAvo