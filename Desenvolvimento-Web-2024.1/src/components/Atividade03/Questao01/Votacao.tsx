import { useState } from "react";
import contexto from "./MeuContexto";
import SaoPaulo from "./SaoPaulo";
import Fortaleza from "./Fortaleza";
import Quixada from "./Quixada";
import Quixeramobim from "./Quixeramobim";

const Votacao = () => {
    let [votosSaoPaulo, setVotosSaoPaulo] = useState(0)
    let [votosFortaleza, setVotosFortaleza] = useState(0)
    let [votosQuixada, setVotosQuixada] = useState(0)
    let [votosQuixeramobim, setVotosQuixeramobim] = useState(0)
    const cidades = {
        "São Paulo": votosSaoPaulo,
        "Fortaleza": votosFortaleza,
        "Quixadá": votosQuixada,
        "Quixeramobim": votosQuixeramobim
    };

    function incrementarSaoPaulo() {
        setVotosSaoPaulo((prevContador) => prevContador + 1);
    }

    function incrementarFortaleza() {
        setVotosFortaleza((prevContador) => prevContador + 1);
    }

    function incrementarQuixada() {
        setVotosQuixada((prevContador) => prevContador + 1);
    }

    function incrementarQuixeramobim() {
        setVotosQuixeramobim((prevContador) => prevContador + 1);
    }

    function maisVotada() {
        let maiorValor = 0;
        let cidadeComMaiorNumeroVotos = "";

        for (const cidade in cidades) {
            const numeroVotos = cidades[cidade];
            if (numeroVotos > maiorValor) {
            maiorValor = numeroVotos;
            cidadeComMaiorNumeroVotos = cidade;
            }
        }

        return cidadeComMaiorNumeroVotos;
    }

    function menosVotada() {
        let menorNumeroVotos = Infinity;
        let cidadeMenosVotada = "";

        for (const cidade in cidades) {
            const numeroVotos = cidades[cidade];
            if (numeroVotos < menorNumeroVotos) {
            menorNumeroVotos = numeroVotos;
            cidadeMenosVotada = cidade;
            }
        }

        return cidadeMenosVotada;
    }

    return (
        <>
            <contexto.Provider value={votosSaoPaulo}>
                <SaoPaulo/>
            </contexto.Provider>
            <contexto.Provider value={votosFortaleza}>
                <Fortaleza/>
            </contexto.Provider>
            <contexto.Provider value={votosQuixada}>
                <Quixada/>
            </contexto.Provider>
            <contexto.Provider value={votosQuixeramobim}>
                <Quixeramobim/>
            </contexto.Provider>
            <button
            onClick={incrementarSaoPaulo}
            >[Votar São Paulo]</button>
            <button
            onClick={incrementarFortaleza}
            >[Votar Fortaleza]</button>
            <button
            onClick={incrementarQuixada}
            >[Votar Quixadá]</button>
            <button
            onClick={incrementarQuixeramobim}
            >[Votar Quixeramobim]</button>
            <h3>Cidade mais votada:{maisVotada()} </h3>
            <h3>Cidade menos votada:{menosVotada()} </h3>
        </>
    )
}

export default Votacao