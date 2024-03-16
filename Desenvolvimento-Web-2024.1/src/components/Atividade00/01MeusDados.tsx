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