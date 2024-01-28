import {useDispatch, useSelector } from "react-redux";

import { addReactions } from "../store/posts-slice";




const reactionEmoji = {
    like: '👍',
    love: '❤️',
    smile: '😂',
    idea: '💡',
    think: '🤔'
}





const ReactionButton = ({postId}) => {

    const reactions = useSelector(state => state.posts.find(post => post.id === postId)).reactions;


    const dispatch = useDispatch();

    return (
        <div className="flex gap-4 mt-2">
            {Object.entries(reactionEmoji).map(([name, emoji]) => {
                return (
                        <button 
                            key={name} 
                            className='rounded-lg hover:bg-slate-300 text-black flex'
                            onClick={() => dispatch(addReactions({
                                reaction: name,
                                id: postId
                            }))}
                        >
                            <p>
                                {emoji}
                            </p>
                            <p>{reactions[name]}</p>
                        </button>
                )
            })}
        </div>
    )
}
export default ReactionButton