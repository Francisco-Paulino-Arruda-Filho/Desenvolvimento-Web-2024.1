import Arena from './Arena'
import { Hero, Enemy } from './03Batalha'
import satoru from './satoru.png'
import sukuna from './sukuna.png'
import padreAlexanderAnderson from './padreAlexanderAnderson.png'
import alucard from './alucard.png'

const World = () => {
    return (
        <>
            <Arena arena="Tóquio" >
                <Hero nome="Satoru Gojo" img={satoru}></Hero>
                <Enemy nome="Sukuna" img={sukuna} ></Enemy>
            </Arena>
            <Arena arena="Londres" >
                <Hero nome="Alucard" img={alucard}></Hero>
                <Enemy nome="Padre Alexander Anderson" img={padreAlexanderAnderson} ></Enemy>
            </Arena>
        </>
    )
}

export default World