/**
 * Nós somos a dupla que teve problam com versionamento do código e essa
 * é a questão que aminha dupla fez. João Pedro Pereira Holanda - 539012
 * https://github.com/Joao-Pedro-P-Holanda, gitHub dele e vou colocar ele como colaborador do repositório
  */

interface Props {
    nome: string,
    curso: string,
    universidade: string
}

const MeusDadosProps = (props: Props) => {
    return (
        <>
            <h2>Nome: {props.nome}</h2>
            <h2>Curso: {props.curso}</h2>
            <h2>Universidade: {props.universidade}</h2>
        </>
    )
}

export default MeusDadosProps