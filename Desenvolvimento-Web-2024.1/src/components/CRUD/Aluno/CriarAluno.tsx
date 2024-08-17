import "../css/crud.css"
import { Navigate } from "react-router-dom"
import { ChangeEvent, useState } from "react"

const CriarAluno = () => {
    
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ cidade, setCidade ] = useState("")
    const [ IRA, setIRA ] = useState("")
    Navigate({ to: "/aluno/CriarAluno" })

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setCurso(event.target.value)
    }

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        alert("Nome: " + nome + "\n Curso: " + curso + "\n Cidade: " + cidade + "\n IRA: " + IRA);
    
        // Obter alunos do localStorage
        const storedAlunos = localStorage.getItem("alunos");
        const alunos = storedAlunos ? JSON.parse(storedAlunos) : [];
    
        // Criar novo aluno
        const novoAluno = {
          id: alunos.length, // pode ser o tamanho atual do array como id
          nome,
          curso,
          cidade,
          IRA,
        };
    
        // Adicionar novo aluno ao array
        alunos.push(novoAluno);
    
        // Salvar array atualizado no localStorage
        localStorage.setItem("alunos", JSON.stringify(alunos));
    
        // Limpar o formulário
        setNome("");
        setCurso("EC");
        setCidade("");
        setIRA("");
      };
    
    
    return (
        <div>
            <h1>Criar Aluno</h1>
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
                    <label className="form-label" htmlFor="inputCidade">Cidade</label>
                    <input
                        className="form-control"
                        type="text"
                        name="cidade"
                        id="inputCidade"
                        onChange={(event)=>setCidade(event.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputIRA">IRA</label>
                    <input
                        className="form-control"
                        type="text"
                        name="IRA"
                        id="inputIRA"
                        onChange={(event)=>setIRA(event.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="selectCurso">Curso</label> 
                    <select
                        className="form-select"
                        value={curso}
                        id="selectCurso"
                        onChange={(event) => handleSelect(event)}
                    >
                        <option value="">Selecione um curso</option>
                        <option value="EC">EC</option>
                        <option value="ES">ES</option>
                        <option value="CC">CC</option>
                        <option value="DD">DD</option>
                        <option value="Redes">Redes</option>
                        <option value="SI">SI</option>
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

export default CriarAluno