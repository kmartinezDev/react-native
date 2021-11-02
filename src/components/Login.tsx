import React, { Fragment, useReducer, useEffect } from 'react'

interface AuthState {
    validando: boolean,
    token: string | null,
    userName: string,
    nombre: string
}

type AuthAction = 
    | { type: 'LOGOUT' } 
    | { type: 'LOGIN', payload: LoginActionPayload }

type LoginActionPayload = {
    username: string,
    nombre: string
}

export const Login = () => {

    const initialState:AuthState = {
        validando: true,
        token: null,
        userName: '',
        nombre: ''
    }

    const authReducer = (state:AuthState, action:AuthAction): AuthState => {

        switch (action.type) {
            case 'LOGOUT':
                return {
                    ...state, validando:false, token: null
                }
                break;
            
            case 'LOGIN':
                const { nombre, username } = action.payload
                return {
                    ...state, userName:username, nombre:nombre, token: '12345678', validando: false
                }
        
            default:
                return state;
        }
    }

    // const [state, dispatch] = useReducer(authReducer, initialState)
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
    
        setTimeout(() => {
           dispatch({type:'LOGOUT'}) 
        }, 1500);
    
    }, [])

    const login = () => {
        dispatch({
            type: 'LOGIN',
            payload: {
                username: 'kmartinez',
                nombre: 'KELLER'
            }
        })
    }

    const logout = () => {
        dispatch({type:'LOGOUT'})
    }

    // if( state.validando){
    if(validando){
        return (
            <Fragment>
                <h3>Login</h3>

                <div className="alert alert-info">
                    Validando...
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <h3>Login</h3>

            {(token) 
                ? <div className="alert alert-success">Autenticado como {nombre}</div>
                : <div className="alert alert-danger">No autenticado</div>
            }

            {
                (token) 
                ? (
                    <button
                        className="btn btn-danger"
                        onClick={logout}
                    >
                        Logout
                    </button>
                )
                : (
                    <button
                        className="btn btn-primary"
                        onClick={login}
                    >
                        Login
                    </button>
                )
            }            
        </Fragment>
    )
}
