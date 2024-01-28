import {useParams} from 'react-router-dom'
import Card from '../components/ui/Card';



const SinglePost = () => {

    const location = useParams();

    const {postId} = location;


    return (
        <Card className='text-black'>
            {postId}
        </Card>
    )
}
export default SinglePost