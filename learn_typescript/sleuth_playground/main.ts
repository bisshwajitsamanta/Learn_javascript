import {SleuthApi} from "./sleuth";
import * as dotenv from "dotenv";

dotenv.config()
export async function run() {
    try{
        const apiURL = process.env.API_URL
        const apiToken = process.env.API_TOKEN
        let sleuthApi = new SleuthApi(apiURL,apiToken)
        await sleuthApi.getProjects()

    }catch (e) {
        console.log(e)
    }
}