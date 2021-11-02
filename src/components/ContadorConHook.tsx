import React, { Fragment } from 'react'
import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

    const {acumular, contador} = useCounter(100)

    return (
        <Fragment>
            <h3>Contador con hook <small>{ contador }</small></h3>

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
