import { useState } from "react"

export const useForm = <T extends Object>(initialState: T) => {
    
    const [formulario, setFormulario] = useState(initialState)

    const handleChange = (value:string, campo: keyof T) => {
        setFormulario({
            ...formulario,
            [campo]: value
        })
    }    

    return {
        ...formulario,
        formulario,
        handleChange
    }
}
