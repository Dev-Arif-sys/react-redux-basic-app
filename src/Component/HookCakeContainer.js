import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from './redux';


const HookCakeContainer = () => {
    const numOfCakes=useSelector(state=>state.cake.numOfCakes);
    const dispatch=useDispatch()
   const [number,setNumber]=useState(1)

    return (
        <div>
            <h1>Number of cakes: {numOfCakes}</h1>
            <input type='number' onChange={(e)=>setNumber(e.target.value)}  />
            <button onClick={()=>dispatch(buyCake(number))}>Buy {number} now</button>
        </div>
    );
};

export default HookCakeContainer;