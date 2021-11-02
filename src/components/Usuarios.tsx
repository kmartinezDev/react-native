import React, { useEffect, useState, useRef } from 'react'
import { Fragment } from 'react';
import { reqReqApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

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
            paginaRef.current += 1
        }
        else{
            alert('No hay mas registros')
        }

        setUsuarios(response.data.data)

    }

    const renderItem = ( {id, first_name, last_name, email, avatar}:Usuario ) => {
        
        return (
            <tr key={ id.toString() }>
                <td>
                    <img 
                        src={avatar} 
                        alt={ first_name } 
                        style={{
                            width:35,
                            borderRadius:100
                        }}
                    />
                </td>
                <td>{ first_name } { last_name }</td>
                <td>{ email }</td>
            </tr>
        )
    }

    return (
        <Fragment>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // usuarios.map( usuario => renderItem( usuario ))
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>

            <button
                className="btn btn-primary"
                onClick={ cargarUsuarios }
            >
                Siguiente
            </button>
        </Fragment>
    )
}
