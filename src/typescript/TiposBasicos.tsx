import { Fragment } from "react"

export const TiposBasicos = () => {
    
    // let nombre = 'Keller'

    // Le decimos a typeScript que nombre puede ser de tipo string o number
    let nombre:string | number | boolean = 'Keller'
    nombre = 123

    const name:string = 'Keller'
    const age:number = 29
    let estaActivo:boolean = true

    const poderes:string[] = ['Velocidad', 'Volar', 'Respirar']
    const boleanos:boolean[] = []
    const numeros:number[] = []
    const variaciones:(string|number)[] = []

    return (
        <Fragment>
            <h3>Tipo basicos</h3>
            {nombre}, {age}, {estaActivo ? 'activo':'no activo'}
            <br />
            {poderes.join(',')}
        </Fragment>
    )
}
