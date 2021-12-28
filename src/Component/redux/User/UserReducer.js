import { USER_FETCH_REQUEST,
    USER_FETCH_SUCCESS,
   USER_FETCH_FAILURE } from "./UserTypes"

const initialState={
    loading:false,
    users:[],
    error:''
}
const UserReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_FETCH_REQUEST:return{
            ...state,
            loading:true
        }
        case USER_FETCH_SUCCESS: return{
            ...state,
            loading:false,
            users:action.payload,
            error:''
        }
        case USER_FETCH_FAILURE: return{
            ...state,
            loading:false,
            error:action.payload
        }
         default: return state
    }
}

export default UserReducer;