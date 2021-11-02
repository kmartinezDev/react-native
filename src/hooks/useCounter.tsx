import React, { Fragment, useState } from 'react'

export const useCounter = ( initialNumber:number = 0 ) => {
    
    const [contador, setContador] = useState<number>(initialNumber)

    const acumular = (numero: number) => {
        setContador(prevContador => prevContador + numero)
    }

    // ECMA6 para objetos
    return {
        acumular,
        contador
    }
}
