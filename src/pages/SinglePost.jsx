import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import Card from '../components/ui/Card';
import PostAuthor from '../components/PostAuthor';
import PostDate from '../components/PostDate';
import ReactionButton from '../components/ReactionButton';



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
        <Card className='text-black bg-gray-50'>
            <div className='font-bold'>
                {post.title}
            </div>
            <PostAuthor userId={post.author} postId={post.id} />
            <PostDate postId={postId} />
            <div className='mt-8'>
                {post.content}
            </div>

            <ReactionButton postId={post.id}  />

            <div className='py-2 mt-4'>
                <Link to={`/edit/${post.id}`} className='bg-cyan-400 text-cyan-50 px-4 py-1 rounded-lg' >Edit</Link>
            </div>
        </Card>
    )
}
export default SinglePost