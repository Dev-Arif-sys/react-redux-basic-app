import { USER_FETCH_REQUEST,
         USER_FETCH_SUCCESS,
        USER_FETCH_FAILURE } from "./UserTypes"
import axios from "axios"

const userFetchRequest=()=>{
    return{
        type:USER_FETCH_REQUEST
    }
}

const userFetchSuccess=(user)=>{
    return{
        type:USER_FETCH_SUCCESS,
        payload:user
    }
}

const userFetchFailure=(error)=>{
    return{
        type:USER_FETCH_FAILURE,
        payload:error
    }
}

export const fetchUsers=()=>{

    return (dispatch)=>{
        dispatch(userFetchRequest)
        axios(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>{
            const users=res.data
           dispatch(userFetchSuccess(users))
        })
        .catch(error=>{
            const errorMsg=error
            dispatch(userFetchFailure(errorMsg))
            
        })
    }
}
