import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body}=post;
    const navigate=useNavigate();

    const handleNavigation=()=>{
        navigate(`/post/${id}`)
    }

    return (
        <div className='border border-indigo-500 rounded-md m-3 p-5'>
            <h2>Single Post</h2>
            <h2>Id: {id}</h2>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}> Show Details</Link>
            <Link to = {`/post/${id}`}>
            <button className='ml-5 border border-black p-2 rounded-md '>show Post Details</button>
            </Link>
            <button className='ml-5 border border-black p-2 rounded-md ' onClick={handleNavigation}>with button Handler</button>
        </div>
    );
};

export default Post;