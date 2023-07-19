import { useReducer, createContext, ReactElement } from "react"
import { Users, usersDatabase } from "./data"
import { useNavigate } from "react-router-dom"

export type User = {
    name: string
    user: string
    id: string
}
type InitialStateType = {
    user: null | User;
    loading: boolean
    error: any
    rooms: any[];
}
export const initialState : InitialStateType = {
    user : null,
    loading: false,
    error: null,
    rooms : []
}
const enum REDUCER_ACTION_TYPE {
    LogInRequest,
    LogInError,
    LogIn,
    RegisterRequest,
    RegisterError,
    Register,
    LogOutRequest,
    LogOut,
}
type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload: any
}

const reducer = (state: typeof initialState, action: ReducerAction) : typeof initialState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.LogInRequest:
            return {...state, loading: true}
        case REDUCER_ACTION_TYPE.LogIn:
            return {...state, loading: false, user : action.payload as User}
        case REDUCER_ACTION_TYPE.LogInError:
            return {...state, loading: false, error: action.payload}
        case REDUCER_ACTION_TYPE.RegisterRequest:
            return {...state, loading: true}
        case REDUCER_ACTION_TYPE.LogOutRequest:
            return {...state, loading: true}
        case REDUCER_ACTION_TYPE.RegisterError:
            return {...state, loading: false, error : action.payload}
        case REDUCER_ACTION_TYPE.Register:
            return {...state, loading: false, user : action.payload as User}
        case REDUCER_ACTION_TYPE.LogOut:
            return {...state, loading: false, user : null}
        default:
            return state;
    }
}

const useGlobalStateHook = (initState : InitialStateType) =>{
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(reducer, initState)

    const loginHandler = (username: string, password: string): void =>{
        console.log(username, password)
        try {
            dispatch({type: REDUCER_ACTION_TYPE.LogInRequest, payload: undefined})
            const user: Users | undefined = usersDatabase.find(x=> x.user === username)
            if (user && user.password === password) {
                dispatch({
                    type: REDUCER_ACTION_TYPE.LogIn,
                    payload: {
                        name: user.name,
                        user: user.user,
                        id: user.id
                    }
                })
                navigate('/')
            } else{
                throw Error("invalid detail")
            }
        } catch (error) {
            dispatch({
                type: REDUCER_ACTION_TYPE.LogInError,
                payload: error
            })
        }
    }




    const registerHandler = (name:string, username: string, password: string): void =>{
        console.log(name, username, password)
        try {
            let id = Math.random().toFixed(3).toString()
            dispatch({type: REDUCER_ACTION_TYPE.RegisterRequest, payload: undefined})
            usersDatabase.push({
                id,
                name,
                user: username,
                password
            })
                dispatch({
                    type: REDUCER_ACTION_TYPE.LogIn,
                    payload: {
                        name,
                        user: username,
                        id 
                    }
                })
                navigate('/')
            
        } catch (error) {
            dispatch({
                type: REDUCER_ACTION_TYPE.RegisterError,
                payload: error
            })
        }
    }

    const logOutHandler = (): void =>{
        try {
            dispatch({type: REDUCER_ACTION_TYPE.LogOutRequest, payload: undefined})
            dispatch({
                    type: REDUCER_ACTION_TYPE.LogOut,
                    payload: null
                })
            
        } catch (error) {
            alert(error)
        }
    }




    return {state, loginHandler, registerHandler, logOutHandler}
}

type useGlobalStateHookType = ReturnType <typeof useGlobalStateHook>
const initialContextState :useGlobalStateHookType = {
    state: initialState,
    loginHandler:  (username: string, password: string) => {},
    registerHandler:  (name: string, username: string, password: string) => {},
    logOutHandler: () => {},
}

export const Store = createContext<useGlobalStateHookType>(initialContextState)
type ChildrenType = {
    children? : ReactElement | undefined
}

export const StoreProvider = ({children, ...initialState} : ChildrenType & InitialStateType)=>{
    return <Store.Provider value={useGlobalStateHook(initialState)}>{children}</Store.Provider>
}