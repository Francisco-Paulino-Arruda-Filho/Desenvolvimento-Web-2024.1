import React, { useState } from "react";
import FilhoA from "./FilhoA";
import FilhoB from "./FilhoB";
import FilhoC from "./FilhoC";

const Pai: React.FC = () => {
  // Array com 5 números inteiros (para ser passado para os componentes filhos)
  const vetor = [3, 6, 2, 9, 5, 22, 45, 90, 100, 273, 1, 0, 4, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  // Variáveis de estado para armazenar os resultados de cada componente filho
  const [maior, setMaior] = useState<number | null>(null);
  const [menor, setMenor] = useState<number | null>(null);
  const [media, setMedia] = useState<number | null>(null);

  // Funções para atualizar os resultados dos componentes filhos
  const handleMaior = (value: number) => {
    setMaior(value);
  };

  const handleMenor = (value: number) => {
    setMenor(value);
  };

  const handleMedia = (value: number) => {
    setMedia(value);
  };

  return (
    <div>
      {/* Passando o vetor e as funções de atualização para cada componente filho */}
      <FilhoA vetor={vetor} onMaior={handleMaior} />
      <FilhoB vetor={vetor} onMenor={handleMenor} />
      <FilhoC vetor={vetor} onMedia={handleMedia} />

      {/* Exibindo os resultados */}
      <p>O maior número encontrado é: {maior}</p>
      <p>O menor número encontrado é: {menor}</p>
      <p>A média dos números é: {media}</p>
    </div>
  );
};

export default Pai;
