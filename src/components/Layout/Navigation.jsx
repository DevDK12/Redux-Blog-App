import { Link } from "react-router-dom"



const Navigation = () => {
    return (
        <div className="bg-gray-400 w-screen px-6 py-4 text-black flex justify-around font-bold">
            <Link to='/'>Home</Link>
            <Link to='/add'>Create Post</Link>
            <Link to='/posts'>View Posts</Link>
        </div>
    )
}
export default Navigation