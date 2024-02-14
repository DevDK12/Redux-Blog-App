

const Card = ({children, className}) => {
    return (
        <div
            className={`${className} bg-gray-300 px-8 py-4 rounded-lg min-w-[400px] w-2/5`}
        >
            {children}
        </div>
    )
}
export default Card