
interface Interface_async_function {
    getRequest: (url:string)=> Promise<string>
    fetchData: () =>  Promise<void>
}

const getReq: Interface_async_function['getRequest'] = async (url: string): Promise<string> =>{
    const response = await fetch(url)
    if(!response.ok){
        throw new Error(`HTTP error Status: ${response.status}`)
    }
    return await response.text()
}

async function getRequest(url: string):Promise<string> {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error(`HTTP error Status: ${response.status}`)
    }
    return await response.text()
}

getRequest('https://www.google.com').then((value)=>{
    console.log(value)
})

const fetchedData: Interface_async_function['fetchData'] = async () => {
    try {
        const value = await getReq('https://www.google.com')
        console.log(value)
    } catch (e) {
        console.error('Error Fetching data:',e)
    }
}

async function fetchData():Promise<void>{
    try {
        const value = await getReq('https://www.google.com')
        console.log(value)
    } catch (e) {
        console.error('Error Fetching data:',e)
    }
}
 // const _ = fetchData()
const _ = fetchedData()