const Hero = (props: any) => {
    return (
        <><h1>{props.nome}</h1><img src={props.img} alt="Imagem"></img></>
    )
};

const Enemy = (props: any) => {
    return (
        <><h1>{props.nome}</h1><img src={props.img} alt="Imagem"></img></>
    )
};

export {Hero, Enemy}