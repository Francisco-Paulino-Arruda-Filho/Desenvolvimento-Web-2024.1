import React from "react"

const Arena = ({children, arena}) => {
    return (
        <>
             <h1>Arena: {arena} </h1>
             <h1>Lutadores</h1>
            {
                React.Children.map(
                    children,
                    (elemento) => {
                        return React.cloneElement(elemento, {arena: arena})
                    }
                )
            }
        </>
    )
}

export default Arena