import {getKeyValue, tokenDictionary} from "./storage.service.js";
import axios from "axios";

export const getWeather = async (city: string = 'moscow') => {
    const token = process.env.TOKEN ?? await getKeyValue(tokenDictionary.token);

    if(!token){
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params : {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })
    console.log(data)

    return data;

};