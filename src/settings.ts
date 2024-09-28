import {config} from 'dotenv'
config()

export const SETTINGS = {
    token: process.env.TOKEN || '',
    weatherURL: process.env.OPENWEATHERURL || '',
}