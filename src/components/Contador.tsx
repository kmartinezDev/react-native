import React, { Fragment, useState } from 'react'

export const Contador = () => {

    const [contador, setContador] = useState<number>(0)

    const acumular = (numero: number) => {
        setContador(prevContador => prevContador + numero)
    }

    return (
        <Fragment>
            <h3>Contador <small>{ contador }</small></h3>

            <button
                className="btn btn-primary"
                onClick={ () => acumular(1) }
            >
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={ () => acumular(-1) }
            >
                -1
            </button>
        </Fragment>
    )
}
