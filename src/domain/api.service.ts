import https from 'https';
import {getKeyValue} from "./storage.service.js";


const getWeather = async (city: string, key: string) => {
    const token = await getKeyValue(key);

    const url = new URL(`https://api.openweathermap.org/data/2.5/weather`);

    url.searchParams.append('q', city);
    url.searchParams.append('appid', city);

    https.get(url);
};