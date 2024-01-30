

const Notifications = ({name, message, time, isNew, read}) => {

    const bgColor = isNew ? 'bg-cyan-100' : 'bg-gray-300'

    return (
        <div className={`${bgColor} px-8 py-3 rounded-md text-gray-700`}>
            <div className="flex  gap-2">
                <h3 className="text-md font-bold">{name}</h3>
                <p>{message}</p>
            </div>
            <p>{time}</p>
        </div>
    )
}
export default Notifications