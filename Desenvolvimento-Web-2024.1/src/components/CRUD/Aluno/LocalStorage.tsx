import { useState } from "react";

const SaveLoadData = () => {

  const alunos: Array<object> = [];

  const [alunoStorage, setAlunoStorage] = useState() 

  function saveData() {

    //localStorage.setItem("aluno",JSON.stringify(aluno))
    sessionStorage.setItem("aluno",JSON.stringify(alunos))
    alert("Dado salvo com sucesso!")

  }

  function loadData() {
    //const alunoCarregado = localStorage.getItem("aluno")
    const alunoCarregado = sessionStorage.getItem("aluno")
    setAlunoStorage(JSON.parse(alunoCarregado))
  }

  return (
    <div>
      <h1>Save Load Data</h1>
      <h3>{JSON.stringify(alunoStorage)}</h3>
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