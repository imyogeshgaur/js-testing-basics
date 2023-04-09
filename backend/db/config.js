import {connect} from 'mongoose'
import { config } from "dotenv"
import { resolve } from "path"
config({path:resolve(".env")})

const connectToDb = async()=>{
    try {
        await connect(process.env.DB_URL)
    } catch (error) {
        console.log("Error in connection : ",error)
    }
}

export default connectToDb