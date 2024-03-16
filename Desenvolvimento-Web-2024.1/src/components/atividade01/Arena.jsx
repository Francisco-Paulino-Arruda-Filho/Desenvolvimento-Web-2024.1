import {Hero, Enemy} from './03Batalha'
import sukuna from './sukuna.png'
import satoru from './satoru.png'

const Arena = () => {
    return (
        <>
            <Hero nome="Satoru Gojo" img={satoru}></Hero>
            <Enemy nome="Sukuna" img={sukuna} ></Enemy>
        </>
    )
}

export default Arena