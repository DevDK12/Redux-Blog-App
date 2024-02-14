import {formatDistanceToNow} from 'date-fns';
import {useSelector, useDispatch} from 'react-redux';


import NotificationItem from "../components/NotificationItem"

import { selectAllNotifications, readAllNotifications  } from '../store/notification-slice';
import { selectAllUsers} from '../store/users-slice';
import { useLayoutEffect } from 'react';








const Notifications = () => {

    const dispatch = useDispatch();

    const notifications = useSelector(selectAllNotifications);
    const users = useSelector(selectAllUsers);


    useLayoutEffect(() => {
        dispatch(readAllNotifications())
    });


    return (
        <div className="w-full h-full px-8 flex flex-col gap-3">
            {notifications.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    name={(users.find(user => user.id === notification.user) || { name: 'Unknown User' }).name}
                    message={notification.message}
                    time={`${formatDistanceToNow(notification.date)} ago`}
                    isNew={notification.isNew}
                    read={notification.read}
                />
            ))
            }
        </div>
    )

}




export default Notifications