import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '.';

const UserContainer = () => {
    const userData=useSelector(state=>state.user)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    console.log(userData)
    return (
        <div>
            {
                userData.loading ? <h2>it's loading</h2> :userData.error ? <p  >{userData.error}</p> :userData.users.map(user=><p key={user.id} >{user.name}</p>)
            }
        </div>
    );
};

export default UserContainer;