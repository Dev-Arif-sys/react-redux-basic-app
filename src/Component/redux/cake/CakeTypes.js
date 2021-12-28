import { BUY_CAKE } from "./CakeAction"

export const buyCake=(number = 1)=>{
    return{
        type:BUY_CAKE,
        payload:number
    }
}