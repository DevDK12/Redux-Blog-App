import {useParams} from 'react-router-dom'

import {useSelector} from 'react-redux';


import { selectUserById } from '../store/users-slice';
import { selectPostsByUser } from '../store/posts-slice';
import PostExcerpt from '../components/PostExcerpt';
import Card from '../components/ui/Card';




const UserPage = () => {

    const {userId} = useParams();
    const user = useSelector(state => selectUserById(state, userId) );


    //_ Initially posts[] will be empty as it only fetchesAllPosts from server when we visit '/posts'
    //* So it will display no posts 


    // const posts = useSelector(state => {
    //     const allPosts = selectAllPosts(state);
    //     const userPosts = allPosts.filter(post => post.author === userId);
    //     return userPosts;
    // })

    //_ Memoized selector
    const posts = useSelector(state => selectPostsByUser(state, userId));



    //* It takes time to fetch users from the server, meanwhile users will be empty
    if(!user){
        return <h2  className='text-2xl font-bold'>
            User not found!
        </h2>
    }

    if(posts.length === 0){
        return <div >
            <h2 className='text-2xl font-bold'>{user.name}</h2>
            <p className='text-md font-semibold'>No Posts</p>
        </div>
    }

    return (
        <>
            <h2 className='text-2xl font-bold'>{user.name}</h2>
            <Card className='flex flex-col gap-4' >
                {posts.map((post) => ( 
                    <PostExcerpt 
                        key={post.id}
                        postId={post.id}
                    />
                    ))
                }
            </Card>
        </>
    )
}


export default UserPage