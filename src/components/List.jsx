import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


import Card from './ui/Card'




const List = () => {

    const posts = useSelector((state) => state.posts);


    return (
        <Card className='flex flex-col gap-4' >
            {posts.map((post) => ( 
                <div 
                    key={post.id}
                    className="bg-gray-100 px-4 py-2 rounded-md text-black "
                >
                    <div className='font-bold'>
                        {post.title}
                    </div>
                    <div className='text-gray-400'>
                        By {post.author} about 4 hrs ago
                    </div>
                    <div>
                        {post.content.substring(0, 100)}...
                    </div>
                    <div className='py-2'>
                        <Link to={`/posts/${post.id}`} className='bg-cyan-400 px-3 py-2 rounded-lg text-cyan-50'>View Post</Link>
                    </div>
                </div>
            ))}
        </Card>
    )
}
export default List