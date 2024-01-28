import {useSelector} from 'react-redux';



const PostAuthor = ({userId}) => {

    const author = useSelector(state => state.users.find(user => user.id === userId));

    return (
        <div className='text-gray-400 mt-1'>
            By {author ? author.name : 'Unknown author'} about 4 hrs ago
        </div>
    )
}
export default PostAuthor