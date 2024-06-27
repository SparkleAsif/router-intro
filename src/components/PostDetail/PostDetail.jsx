import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id, title, useId, body}=post;
    const navigate = useNavigate();

    const handleGoBack=()=>{
        navigate(-1);
       
    }

    return (
        <div>
            <h2>Details about your post of : {id}</h2>
            <p><small>{body}</small></p>
            <button className='p-2 border  rounded-md border-black' onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;