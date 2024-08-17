import "../css/crud.css";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ListarAluno = () => {
  const [alunos, setAlunos] = useState<{ id: number; nome: string; curso: string; cidade: string; IRA: string }[]>([]);
  Navigate({ to: "/aluno/ListarAluno" })

  useEffect(() => {
    // Puxa os dados de alunos do localStorage quando o componente é montado
    const storedAlunos = localStorage.getItem("alunos");
    if (storedAlunos) {
      setAlunos(JSON.parse(storedAlunos));
    }
  }, []);

  const tabelaAlunos = () => {
    const alunosTabelados = alunos.map((aluno, index) => (
      <tr key={index}>
        <td>{aluno.id}</td>
        <td>{aluno.nome}</td>
        <td>{aluno.IRA}</td>
        <td>{aluno.curso}</td>
        <td>{aluno.cidade}</td>
      </tr>
    ));

    return (
      <div className="page-content">
        <div className="table-content">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">IRA</th>
                <th scope="col">Curso</th>
                <th scope="col">Cidade</th>
              </tr>
            </thead>
            <tbody>
              {alunosTabelados}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1>Listar Aluno</h1>
      {tabelaAlunos()}
    </>
  );
};

export default ListarAluno;
