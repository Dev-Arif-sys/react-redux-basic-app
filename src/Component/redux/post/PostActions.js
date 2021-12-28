import axios from "axios"
import { FETCH_POST_REQUEST,FETCH_POST_SUCCESS,FETCH_POST_FAILURE } from "./PostTypes"

const fetchPostRequest=()=>{
    return{
        type:FETCH_POST_REQUEST
    }
}

const fetchPostSuccess=(post)=>{
    return{
       type:FETCH_POST_SUCCESS,
       payload:post
    }
}

const fetchPostFailure=(error)=>{
    return{
        type:FETCH_POST_FAILURE,
        payload:error
    }
}

export const fetchPost=()=>{
    return (dispatch)=>{
        dispatch(fetchPostRequest)
        axios('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            const posts=res.data
            dispatch(fetchPostSuccess(posts))
        })
        .catch(error=>{
            const errorMsg=error
            dispatch(fetchPostFailure(error))
        })
        
    }
}