import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";



import Card from "./ui/Card";


import { addPost } from "../store/posts-slice";








const Form = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);


    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
    const [userId , setUserId] = useState("");




    const submitHandler = (e) => {
        e.preventDefault()

        if(title === "" || content === "" || userId === "" ) return;

        console.log(userId);
        dispatch(addPost({
            title,
            content,
            author: userId,
        }));
        
        navigate(`/posts`);

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
                    <select 
                        className="px-4 py-2 rounded-md w-full"
                        onChange={(e => setUserId(e.target.value))}
                        value={userId}
                    >
                        <option value=''>--Select Author--</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                    <button className="bg-cyan-500 text-white rounded-md w-1/2 mx-auto">Submit</button>
                </form>
            </Card>

    )
}
export default Form