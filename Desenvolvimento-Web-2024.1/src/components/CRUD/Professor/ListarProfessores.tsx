import "../css/crud.css"
import { useEffect, useState } from "react";

const ListarProfessor = () => {

  const [ professores, setProfessores] = useState<{ id: number; nome: string; titulacao: string, curso: string}[]>([]);

  useEffect(() => {
    // Puxa os dados de alunos do localStorage quando o componente é montado
    const storedProfessor = localStorage.getItem("professor");
    console.log(storedProfessor);
    if (storedProfessor) {
      setProfessores(JSON.parse(storedProfessor));
    }
  }, []);
  
  const renderizarProfessores = () => {
    const vetorResultado = professores.map(
        (professor) => {
            return (
                <tr>
                    <th scope="row">{professor.id}</th>
                    <td>{professor.nome}</td>
                    <td>{professor.curso}</td>
                    <td>{professor.titulacao}</td>
                    <td>
                        <div>
                            <button type="button" className="btn btn-success">Editar</button>
                            <button type="button" className="btn btn-danger">Apagar</button>
                        </div>
                    </td>
                </tr>
            )
        }
    )
    return vetorResultado;
  };

  return (
    <div className="page-content">
      <h1>Listar Professor</h1>
      <div className="table-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Titulação</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {renderizarProfessores()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarProfessor;