import { useState } from "react";

const SaveLoadData = () => {

  const professores: Array<object> = [];

  const [professoresStorage, setProfessoresStorage] = useState() 

  function saveData() {

    //localStorage.setItem("aluno",JSON.stringify(aluno))
    sessionStorage.setItem("professor",JSON.stringify(professores))
    alert("Dado salvo com sucesso!")

  }

  function loadData() {
    //const alunoCarregado = localStorage.getItem("aluno")
    const professorCarregado = sessionStorage.getItem("professor")
    setProfessoresStorage(JSON.parse(professorCarregado))
  }

  return (
    <div>
      <h1>Save Load Data</h1>
      <h3>{JSON.stringify(professoresStorage)}</h3>
      <button onClick={saveData}>
        SAVE DATA
      </button>
      <button onClick={loadData}>
        LOAD DATA
      </button>
    </div>
  );
};

export default SaveLoadData;