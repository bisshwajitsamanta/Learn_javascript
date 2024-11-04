import {GET_ALL_PROJECTS} from "./queries";
import * as dotenv from 'dotenv';

dotenv.config()

interface isSleuthAPI {
    apiUrl: string
    apiToken: string
    getProjects(): Promise<void>
}

class SleuthApi implements isSleuthAPI{
    apiUrl: string
    apiToken: string

    constructor(apiUrl:string,apiToken:string) {
        this.apiUrl = apiUrl
        this.apiToken = apiToken
    }

    async getProjects() {
        console.log('Starting Connection Check')
        try{
            const response = await fetch(this.apiUrl,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.apiToken}`
                },
                body: JSON.stringify({
                    query: GET_ALL_PROJECTS,
                })
            })
            const resp = await response.json()
        } catch (e) {

        }
    }
}
export {SleuthApi}