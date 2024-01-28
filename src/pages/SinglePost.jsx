import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom'
import Card from '../components/ui/Card';



const SinglePost = () => {

    const location = useParams();

    const {postId} = location;

    const post = useSelector(state => state.posts.find(post => post.id === postId));

    if(!post){
        return (
            <Card className='text-black'>
                <h1>Post not found</h1>
            </Card>
        )
    }

    return (
        <Card className='text-black h-[200px]'>
            <div className='font-bold'>
                {post.title}
            </div>
            <div className='text-gray-600 mt-2'>
                By {post.author} about 4 hrs ago
            </div>
            <div className='mt-8'>
                {post.content}
            </div>
        </Card>
    )
}
export default SinglePost