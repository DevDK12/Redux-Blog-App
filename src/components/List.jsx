import { useSelector  , useDispatch} from 'react-redux'


import Card from './ui/Card'

import { selectAllPosts, fetchPosts, selectPostsStatus, selectPostsError } from '../store/posts-slice';
import { useEffect } from 'react';
import PostExcerpt from './PostExcerpt';









const List = () => {
    const dispatch = useDispatch();


    const posts = useSelector(selectAllPosts);


    const postStatus = useSelector(state => selectPostsStatus(state));
    const error = useSelector(state => selectPostsError(state));

    useEffect(()=>{
        if(postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    },[postStatus, dispatch]);



    if(postStatus === 'pending'){
        return <div className='font-bold mx-auto'>Loading...</div>
    }
    else if(postStatus === 'succeeded' && posts.length  === 0){
        return <div className='font-bold mx-auto' >No Posts</div>
    }
    else if(postStatus === 'failed') {
        return  <div className='text-red-400 font-bold mx-auto'>{error}</div>
    }


    const orderedPosts = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
    
    return (
        <Card className='flex flex-col gap-4' >
            {orderedPosts.map((post) => ( 
                <PostExcerpt 
                    key={post.id}
                    post={post}
                />
                ))
            }
        </Card>
    )
}
export default List