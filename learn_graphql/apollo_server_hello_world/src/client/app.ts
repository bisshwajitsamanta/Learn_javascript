
interface IsfetchGreeting {
    fetchGreet:  () => Promise<string|null>
    fetchBody: () => Promise<string|void|undefined>
}

const fetchGreet: IsfetchGreeting['fetchGreet'] =  async () => {
    try {
        const response = await fetch('http://localhost:9000',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: 'query{ hello }'
            })
        })

        if (!response.ok){
            console.error(`Network was not okay: ${response.status}`)
        }
        const {data} = await response.json()
        // console.log('Body', body)
        return data.hello;

    } catch (e) {
        if (e instanceof Error){
            console.error('Error Fetching Greeting: ',e.message)
            return null
        } else{
            console.error('An unknown error occurred', e)
            return null
        }
    }
}

const fetched: IsfetchGreeting['fetchBody'] = async () => {
    const resp = await fetchGreet()
    if (resp) {
        const greetingElement = document.getElementById('greeting')
        if (greetingElement){
            greetingElement.textContent = resp
        } else{
            console.error('Element with ID "Greeting" not found in the DOM.')
        }
        // console.log(resp)
        return resp
    } else {
        console.error("Failed to fetch Greeting")
        return ""
    }
}
// const _ =fetchGreet()

const _ =fetched()