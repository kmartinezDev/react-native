import { Fragment, useRef, useState, useEffect } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqReqApi } from '../api/reqRes';

export const useUsuarios = () => {
    
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const paginaRef = useRef(1)

    useEffect(() => {
        cargarUsuarios()
    }, [])


    const cargarUsuarios = async () => {
        // reqReqApi.get<ReqResListado>('/users')
        // .then(response => {
        //     // console.log(response.data.data)
        //     setUsuarios(response.data.data)
        // })
        // // .catch(error => console.log(error))
        // .catch( console.log )

        const response = await reqReqApi.get<ReqResListado>('/users',{
            params: {
                page: paginaRef.current
            }
        })

        if( response.data.data.length ){
            setUsuarios(response.data.data)
        }
        else{
            paginaRef.current--;
            alert('No hay mas registros')
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current += 1
        cargarUsuarios()
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current -= 1
        }
        cargarUsuarios()
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
