/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "react-router-dom"
import {useSelector} from 'react-redux';

import { selectPostById } from "../store/posts-slice";


import PostAuthor from "./PostAuthor"
import PostDate from "./PostDate"
import ReactionButton from "./ReactionButton"




const PostExcerpt = ({postId}) => {

    const post = useSelector(state => selectPostById(state, postId));

    return (
        <div className="bg-gray-100 px-4 py-2 rounded-md text-black " >
            <div className='font-bold'>
                {post.title}
            </div>
            <PostAuthor userId={post.author} postId={post.id} />
            <PostDate postId={post.id} />
            <div className='mt-4'>
                {post.content.substring(0, 100)}...
            </div>
        
            <ReactionButton postId={post.id} />
            
            <div className='py-2 mt-6'>
                <Link to={`/posts/${post.id}`} className='bg-cyan-400 px-3 py-2 rounded-lg text-cyan-50'>View Post</Link>
            </div>
        </div>
    )
}
export default PostExcerpt