import {useSelector} from 'react-redux';
import { formatDistanceToNow } from 'date-fns';

import { selectPostById } from '../store/posts-slice';





const PostDate = ({postId}) => {
    const {date} = useSelector(state => selectPostById(state, postId));

    return (
        <div className='text-gray-400 mt-1'>{formatDistanceToNow(new Date(date))} ago</div>
    )
}
export default PostDate