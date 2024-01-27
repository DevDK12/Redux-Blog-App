

const posts = [
    { 
        "id": "1", 
        "title": "a title", 
        "views": 100 
    },
    { 
        "id": "2", 
        "title": "another title", 
        "views": 200 
    },
]


const List = () => {
    return (
        <div className="bg-gray-300 flex flex-col gap-4 w-1/3 px-8 py-4 rounded-lg">
            {posts.map((post) => ( 
                <div 
                    key={post.id}
                    className="bg-gray-100 px-4 py-2 rounded-md text-black font-bold"
                >
                    {post.title} - {post.views}
                </div>
            ))}
        </div>
    )
}
export default List