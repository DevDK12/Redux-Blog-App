import {useSelector} from 'react-redux';
import { formatDistanceToNow } from 'date-fns';

const PostDate = ({postId}) => {
    const {date} = useSelector(state => state.posts.find(post => post.id === postId));

    return (
        <div className='text-gray-400 mt-1'>{formatDistanceToNow(new Date(date))} ago</div>
    )
}
export default PostDate