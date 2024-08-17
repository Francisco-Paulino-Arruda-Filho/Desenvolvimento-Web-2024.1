import { useState } from "react";

const Questao02 = () => {
    const [virar, setVirar] = useState(false);

    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
    const url2 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'

    return (
        <>
            <h1>Questão 02</h1>
            <button onClick={() => setVirar(!virar)}>Virar</button>
            {virar ? (
                <img src={url} alt="Pokemon" />
            ) : (
                <img  src={url2} alt="Pokemon" />
            )}
        </>
    );
}

export default Questao02;