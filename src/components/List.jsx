import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


import Card from './ui/Card'
import PostAuthor from './PostAuthor';
import PostDate from './PostDate';




const List = () => {

    const posts = useSelector((state) => state.posts);

    const orderedPosts = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
    
    return (
        <Card className='flex flex-col gap-4' >
            {orderedPosts.map((post) => ( 
                <div 
                    key={post.id}
                    className="bg-gray-100 px-4 py-2 rounded-md text-black "
                >
                    <div className='font-bold'>
                        {post.title}
                    </div>
                    <PostAuthor userId={post.author} postId={post.id} />
                    <PostDate postId={post.id} />
                    <div className='mt-4'>
                        {post.content.substring(0, 100)}...
                    </div>
                    <div className='py-2 mt-6'>
                        <Link to={`/posts/${post.id}`} className='bg-cyan-400 px-3 py-2 rounded-lg text-cyan-50'>View Post</Link>
                    </div>
                </div>
            ))}
        </Card>
    )
}
export default List