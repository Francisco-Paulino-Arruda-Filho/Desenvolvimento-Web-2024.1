import { useState, useEffect } from "react";

interface Country {
    capital: string[];
    population: number;
}

interface CapitalPopulacao {
    capital: string;
    populacao: number;
}

const Questao03: React.FC = () => {
    const vetor: CapitalPopulacao[] = [];
    const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState<string>("");
    const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState<string>("");

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/region/europe?fields=capital,population')
            .then(response => response.json())
            .then((data: Country[]) => {
                data.forEach((country) => {
                    if (country.capital && country.capital.length > 0) {
                        vetor.push({ capital: country.capital[0], populacao: country.population });
                    }
                });
                vetor.sort((a, b) => b.populacao - a.populacao);
                setCapitalMaiorPopulacao(vetor[0].capital);
                setCapitalMenorPopulacao(vetor[vetor.length - 1].capital);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Questão 03</h1>
            <h2>Capital com Maior População: {capitalMaiorPopulacao}</h2>
            <h2>Capital com Menor População: {capitalMenorPopulacao}</h2>
        </div>
    );
}

export default Questao03;
