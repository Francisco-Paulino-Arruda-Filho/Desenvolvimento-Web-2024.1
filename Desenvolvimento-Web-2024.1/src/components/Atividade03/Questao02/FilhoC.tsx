import React from "react";

interface Props {
  vetor: number[];
  onMedia: (value: number) => void;
}

const FilhoC: React.FC<Props> = ({ vetor, onMedia }) => {
const calcularMedia = () => {
    let soma: number = 0; // Initialize soma with an initial value of 0
    vetor.forEach((element) => {
            soma += element;
    });
    const media = soma / vetor.length;
    onMedia(media);
    
};

  return (
    <div>
      <h3>Filho C</h3>
      <button onClick={calcularMedia}>Calcular Média</button>
    </div>
  );
};

export default FilhoC;
