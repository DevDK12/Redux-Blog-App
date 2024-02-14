import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";


import Card from "./ui/Card";


import { addNewPost } from "../store/posts-slice";
import { selectAllUsers } from '../store/users-slice';





        
const reactions = {
    like : 0,
    love : 0,
    smile : 0,
    idea : 0,
    think : 0
}



const Form = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);


    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
    const [userId , setUserId] = useState("");





    const [addReqStatus, setAddReqStatus] = useState('idle');


    const submitHandler = async (e) => {
        e.preventDefault()

        
        if(title === "" || content === "" || userId === "" || addReqStatus !== "idle" ) return;


        const id = nanoid();
        const date = new Date().toISOString();
        const author = userId;

        try{
            setAddReqStatus('pending');

            //_ unwrap() 
            //* 'createAsyncThunk' handles error internally and  provides unwrap() method 
            //* unwrap() : returns a promise that either resolves with the fulfilled action payload 
            //* or rejects with the rejected action payload or an error object.

            await dispatch(addNewPost({id,title,content,author,date,reactions})).unwrap();

            setTitle("")
            setContent("")
            setUserId("")
        }
        catch(err){
            console.log('Failed to save the post : ', err);
        }
        finally{
            setAddReqStatus('idle');
        }
        
        navigate(`/posts`);


    }



    let buttonLabel = 'Submit';    
    if(addReqStatus === 'pending'){
        buttonLabel = 'Adding...';
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
                    <button className="bg-cyan-500 text-white rounded-md w-1/2 mx-auto">{buttonLabel}</button>
                </form>
            </Card>

    )
}
export default Form