import {getKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";
import axios from "axios";

export const getIcon = (icon: any) => {
    let res = ''
    switch (icon.slice(0, -1)) {
        case '01':
            res = '01';
            break
        case '02':
            res = '02';
            break
        case '03':
            res = '03';
            break
        case '04':
            res = '04';
            break
        case '05':
            res = '05';
            break
        case '06':
            res = '06';
            break
        case '07':
            res = '07';
            break
        case '08':
            res = '09';
            break
    }
    return res;
}

export const getWeather = async (city: string = 'moscow') => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);

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