interface Props {
    altura: number,
    peso: number
}

const Filho = (props: Props) => {
    const { altura, peso } = props

    const calcImc = (altura: number, peso: number) => {
        return peso / (altura * altura)
    }
    const mensagem = (imc: number) => {
        if (imc < 18) {
            return <h3>Abaixo do peso</h3>
        }
        else if (imc > 25) {
            return <h3>Acima do peso</h3>
        }
        else {
            return <h3>Peso ideal</h3>
        }
    }
    return (<>
        <h2>{calcImc(altura, peso).toFixed(2)}</h2>
        {mensagem(calcImc(altura, peso))}
    </>);
}

export default Filho;