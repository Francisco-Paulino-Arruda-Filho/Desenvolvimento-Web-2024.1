import { useEffect, useState } from "react";

const EditarAluno = () => {
  const [alunos, setAlunos] = useState<{ id: number; nome: string; curso: string; cidade: string; IRA: string }[]>([]);

  useEffect(() => {
    // Puxa os dados de alunos do localStorage quando o componente é montado
    const storedAlunos = localStorage.getItem("alunos");
    if (storedAlunos) {
      setAlunos(JSON.parse(storedAlunos));
    }
  }, []);

  const handleChange = (index: number, field: string, value: string) => {
    const updatedAlunos = alunos.map((aluno, i) => 
      i === index ? { ...aluno, [field]: value } : aluno
    );
    setAlunos(updatedAlunos);
  };

  const handleSave = () => {
    // Atualiza o localStorage com os dados modificados
    const updatedAlunos = [...alunos];
    localStorage.setItem("alunos", JSON.stringify(updatedAlunos));
    alert("Aluno salvo com sucesso!");
  };

  const handleDelete = (id: number) => {
    // Remove o aluno com o ID correspondente
    const updatedAlunos = alunos.filter(aluno => aluno.id !== id);
    setAlunos(updatedAlunos);
    localStorage.setItem("alunos", JSON.stringify(updatedAlunos));
  };

  const tabelaAlunos = () => {
    return alunos.map((aluno, index) => (
      <tr key={aluno.id}>
        <td>{aluno.id}</td>
        <td>
          <input
            type="text"
            defaultValue={aluno.nome}
            onChange={(e) => handleChange(index, "nome", e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            defaultValue={aluno.IRA}
            onChange={(e) => handleChange(index, "IRA", e.target.value)}
          />
        </td>
        <td>
          <select
            defaultValue={aluno.curso}
            onChange={(e) => handleChange(index, "curso", e.target.value)}
          >
            <option value="ES">Engenharia de Software</option>
            <option value="DD">Design Digital</option>
            <option value="EC">Engenharia de Computação</option>
            <option value="CC">Ciência da Computação</option>
            <option value="SI">Sistemas de Informação</option>
            <option value="Redes">Redes de Computadores</option>
          </select>
        </td>
        <td>
          <input
            type="text"
            defaultValue={aluno.cidade}
            onChange={(e) => handleChange(index, "cidade", e.target.value)}
          />
        </td>
        <td>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleSave()}
          >
            Salvar
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(aluno.id)}
          >
            Apagar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h1>Editar Aluno</h1>
      <div className="table-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>IRA</th>
              <th>Curso</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>{tabelaAlunos()}</tbody>
        </table>
      </div>
    </>
  );
};

export default EditarAluno;
