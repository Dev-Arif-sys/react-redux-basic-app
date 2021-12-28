import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from './index';

const HookIceCreamContainer = () => {
    const numOfIceCream=useSelector(state=>state.iceCream.numOfIceCream)
    const dispatch=useDispatch()
    return (
        <div>
            <h1>number of icecream: {numOfIceCream}</h1>
            <button onClick={()=> dispatch(buyIceCream())}>buy icecream</button>
        </div>
    );
};

export default HookIceCreamContainer;