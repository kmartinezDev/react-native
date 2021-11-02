import { Fragment } from 'react'

interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}

interface Direccion{
    pais: string,
    ciudad: string,
    nro: number
}


export const ObjetosLiterales = () => {

    const persona:Persona = {
        nombreCompleto: 'Keller',
        edad: 29,
        direccion: {
            pais: 'Espana',
            ciudad: 'Madrid',
            nro: 6
        }
    }

    // No puedo declarar propiedades de esta forma
    // persona.nombreCompleto = 'Keller Martinez'

    return (
        <Fragment>
            <h3>Objetos literales</h3>
            <pre>
                {/* En el null lo puedes cambiar por un arreglo y la key que desees obtener - REPLACER */}
                { JSON.stringify(persona, null, 2) }
            </pre>
        </Fragment>
    )
}
