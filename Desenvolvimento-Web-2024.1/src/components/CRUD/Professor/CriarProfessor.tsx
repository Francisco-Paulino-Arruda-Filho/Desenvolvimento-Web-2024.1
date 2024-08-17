import "../css/crud.css"
import { SetStateAction, useState } from "react"

const CriarProfessor = () => {
    
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("")

    const handleSelect = (event: { target: { value: SetStateAction<string> } }) => {
        setTitulacao(event.target.value)
    }

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        alert("Nome: " + nome + "\n Curso: " + curso + "\n Titulação: " + titulacao);
    
        // Obter alunos do localStorage
        const storedAlunos = localStorage.getItem("professor");
        const professores = storedAlunos ? JSON.parse(storedAlunos) : [];
    
        // Criar novo aluno
        const novoAluno = {
          id: professores.length, // pode ser o tamanho atual do array como id
          nome,
          curso,
          titulacao,
        };
    
        // Adicionar novo aluno ao array
        professores.push(novoAluno);
    
        // Salvar array atualizado no localStorage
        localStorage.setItem("professor", JSON.stringify(professores));
    
        // Limpar o formulário
        setNome("");
        setCurso("EC");
        setTitulacao("");
      };
    
    return (
        <div>
            <h1>Criar Professor</h1>
            <form className="form-content" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputNome">Nome</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nome" 
                        id="inputNome"
                        onChange={(event)=>setNome(event.target.value)}
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputCurso">Curso</label>
                    <input
                        className="form-control"
                        type="text"
                        name="curso"
                        id="inputCurso"
                        onChange={(event)=>setCurso(event.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="selectTitulacao">Titulação</label> 
                    <select
                        className="form-select"
                        value={titulacao}
                        id="selectTitulacao"
                        onChange={(event) => handleSelect(event)}
                    >
                        <option value="GRADUACAO">GRADUAÇÃO</option>
                        <option value="MESTRADO">MESTRADO</option>
                        <option value="DOUTORADO">DOUTORADO</option>
                    </select>
                </div>
                
                <div className="div-button-submit">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{marginLeft:0}}
                    >
                        Submeter
                    </button>
                </div>

            </form>
        </div>
        
    )
}

export { CriarProfessor }