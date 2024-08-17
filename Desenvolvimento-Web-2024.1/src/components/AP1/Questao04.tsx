const Questao04 = () => {
    return (
        <div>
            <h1>Questão 04</h1>
            <p>Questão 04 - Crie um arquivo Questao04.txt e:
                Explique como o uso de Contextos pode resolver o problema de PROPS DRILLING. Use
                um exemplo em (pode codificar ou simplesmente desenhar e explicar. Não precisa
                executar)
                <p>
                    O uso de Contextos pode resolver o problema de PROPS DRILLING, pois ele permite que um componente pai 
                    passe informações para componentes filhos, netos, bisnetos, etc., sem a necessidade de passar as props 
                    manualmente por todos os componentes intermediários. Dessa forma, o Context API permite que os componentes acessem as 
                    informações de forma mais simples e direta, sem a necessidade de passar as props manualmente por todos os componentes 
                    intermediários.
                </p>
            </p>
        </div>
    );
}

export default Questao04;