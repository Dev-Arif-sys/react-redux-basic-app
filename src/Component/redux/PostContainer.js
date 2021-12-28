import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, fetchUsers } from '.';

const PostContainer = () => {
    const postData=useSelector(state=>state.post)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchPost())
    },[])

    return (
        <div>
            
            {
                postData.loading? <h1>its loading</h1> : postData.error ?<p>{postData.error}</p> :postData.posts.map(post=><h2>{post.title}</h2>)
            }
        </div>
    );
};

export default PostContainer;