import { Link } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux';

import {fetchNotifications, selectAllNotifications} from '../../store/notification-slice';





const Navigation = () => {

    const unreadCount = useSelector(selectAllNotifications).filter(noti => noti.read === false).length;


    const dispatch = useDispatch();

    const refreshNotifications = () => {
        dispatch(fetchNotifications());
    }


    let badge;
    if(unreadCount > 0) {
        badge = <span className="text-red-600">{unreadCount}</span>
    }

    return (
        <div className="bg-gray-400 w-screen px-6 py-4 text-black flex justify-around items-center font-bold">
            <Link to='/'>Home</Link>
            <Link to='/add'>Create Post</Link>
            <Link to='/posts'>View Posts</Link>
            <Link to='/users'>Users</Link>
            <Link to='/notifications'>
                Notifications 
                <span className="text-red-600">{badge}</span>
            </Link>
            <button 
                className="bg-cyan-400 px-2 py-2 rounded-lg text-white"
                onClick={refreshNotifications}
            >
                Refresh Noti
            </button>
        </div>
    )
}


export default Navigation