import React from "react";

interface Props {
  vetor: number[];
  onMenor: (value: number) => void;
}

const FilhoB: React.FC<Props> = ({ vetor, onMenor }) => {
  const encontrarMenor = () => {
    const menor = Math.min(...vetor);
    onMenor(menor);
  };

  return (
    <div>
      <h3>Filho B</h3>
      <button onClick={encontrarMenor}>Encontrar Menor</button>
    </div>
  );
};

export default FilhoB;
