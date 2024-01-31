import {useSelector} from 'react-redux';

import { selectUserById } from '../store/users-slice';


const PostAuthor = ({userId}) => {

    const author = useSelector(state => selectUserById(state, userId));

    return (
        <div className='text-gray-400 mt-1'>
            By {author ? author.name : 'Unknown author'} 
        </div>
    )
}
export default PostAuthor