


const Form = () => {

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Form submitted");
    }


    return (

            <form 
                onSubmit={submitHandler}
                className="bg-gray-300 flex flex-col gap-4 w-1/3 px-8 py-4 rounded-lg"
            >
                <input 
                    className="px-4 py-2 rounded-md "
                    type="text" 
                    placeholder="Enter title" 
                    />
                <input 
                    className="px-4 py-2 rounded-md "
                    type="number" 
                    placeholder="Enter views" 
                />
                <button className="bg-cyan-500 text-white rounded-md w-1/2 mx-auto">Submit</button>
            </form>
    )
}
export default Form