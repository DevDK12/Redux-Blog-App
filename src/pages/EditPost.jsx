import {useParams, useNavigate} from 'react-router-dom';
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import Card from "../components/ui/Card";


import { updatePost } from "../store/posts-slice";







const EditPost = () => {

    const {postId} = useParams();
    const navigate = useNavigate();

    
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.find(post => post.id === postId));


    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content); 



    const submitHandler = (e) => {
        e.preventDefault()

        if(title === "" || content === "" ) return;

        const author = "Dev";

        dispatch(updatePost({
            id: postId,
            title,
            content,
            author
        
        }));
        
        navigate(`/posts/${postId}`);
        setTitle("")
        setContent("")
    }


    return (
            <Card >
                <form 
                    className="flex flex-col gap-4"
                    onSubmit={submitHandler}
                >
                    <input 
                        className="px-4 py-2 rounded-md w-full "
                        type="text" 
                        placeholder="Enter title" 
                        onChange={(e => setTitle(e.target.value))}
                        value={title}
                    />
                    <textarea
                        className="px-4 py-2 rounded-md w-full"
                        placeholder="Enter content"
                        onChange={(e => setContent(e.target.value))}
                        value={content}
                    />
                    <button className="bg-cyan-500 text-white rounded-md w-1/2 mx-auto">Submit</button>
                </form>
            </Card>

    )
}
export default EditPost