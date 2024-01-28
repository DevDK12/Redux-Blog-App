// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper





const client = async (endpoint, { body, ...customConfig } = {})  => {
    
    const headers = { 'Content-Type': 'application/json' }

    //* This does not works for some reason
    // if (body) {
    //     body = JSON.stringify(body)
    // }
    
    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    }


    //* We need to use here only
    if (body) {
        config.body = JSON.stringify(body)
    }


    let data
    try {

        // //_ Adds 2 sec delay with 50% chance of failure for testing purposes
        // await new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         // Reject the promise with a 40% chance
        //         if (Math.random() < 0.6) {
        //             reject(new Error('Failed for testing by 40%'));
        //         } else {
        //             resolve();
        //         }
        //     }, 2000);
        // });


        const response = await fetch(endpoint, config)

        data = await response.json()
        
        if (!response.ok) {
            throw new Error(response.message)
        }

        
        // Return a result object similar to Axios
        return {
            status: response.status,
            data,
            headers: response.headers,
            url: response.url,
        }
    } 
    catch (err) {
        return Promise.reject(err.message ? err.message : data)
    }
}




client.get =  (endpoint, customConfig = {}) => client(endpoint, { ...customConfig, method: 'GET' })


client.post = (endpoint, body, customConfig = {}) => client(endpoint, { ...customConfig, body })


export default client;