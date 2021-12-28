import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import postReducer from "./post/PostReducer";
import UserReducer from "./User/UserReducer";

const RootReducer=combineReducers({
    cake:CakeReducer,
    iceCream:iceCreamReducer,
    user:UserReducer,
    post: postReducer
}) 

export default RootReducer