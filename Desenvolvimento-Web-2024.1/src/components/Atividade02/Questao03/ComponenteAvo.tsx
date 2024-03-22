import { useState } from "react";
import ThemeContext from "./MeuContexto";
import ComponenteFilho from "./ComponenteFilho";

const ComponenteAvoDa3 = () => {
    let [numero, setNumero] = useState(1)
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'

    function incrementarNumero() {
        if(numero + 1 > 1025) {
            return
        }
        setNumero((prevContador) => prevContador + 1);
    }

    const decrementarNumero = () => {
        if(numero - 1 <= 0) {
            return
        }
        setNumero((prevContador) => prevContador - 1);
    };

    return (
        <>
            <h1>Componente Avô</h1>
            <img src={url} alt="Pokemon" width={200} ></img>
            <ThemeContext.Provider value={numero}>
                <ComponenteFilho/>
            </ThemeContext.Provider>
            <button onClick={decrementarNumero}>
                Decrementar número
            </button>
            <button onClick={incrementarNumero}>
                Incrementar número
            </button>
        </>
    )
}

export default ComponenteAvoDa3