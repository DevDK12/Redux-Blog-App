import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import { selectAllUsers } from '../store/users-slice';


import Card from '../components/ui/Card';



const Users = () => {


    const users = useSelector(selectAllUsers);



    return (
        <Card  className='text-black'>
            <h3 className='text-lg text-cyan-600 font-bold'>Users</h3>
                {users.map( user => (
                    <div key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </div>
                ))}
        </Card>
    )
}
export default Users