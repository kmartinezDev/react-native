import React, { Fragment } from 'react'

export const Funciones = () => {

    const sumar = ( a:number, b:number=100):number => {
        return a+b
    }

    return (
        <Fragment>
            <h3>Funciones</h3>
            <span>El resultado es { sumar(2) }</span>
            <br />
            <span>El resultado es { sumar(100,300) }</span>
        </Fragment>
    )
}
