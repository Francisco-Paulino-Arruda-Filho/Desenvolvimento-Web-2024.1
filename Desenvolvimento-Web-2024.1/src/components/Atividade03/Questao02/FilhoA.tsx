import React from "react";

interface Props {
  vetor: number[];
  onMaior: (value: number) => void;
}

const FilhoA: React.FC<Props> = ({ vetor, onMaior }) => {
  
  const encontrarMaior = () => {
    const maior = Math.max(...vetor);
    onMaior(maior);
  };

  return (
    <div>
      <h3>Filho A</h3>
      <button onClick={encontrarMaior}>Encontrar Maior</button>
    </div>
  );
};

export default FilhoA;
