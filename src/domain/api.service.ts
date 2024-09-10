import https from 'https';
import {getKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";


const getWeather = async (city: string) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);

    const url = new URL(`https://api.openweathermap.org/data/2.5/weather`);

    url.searchParams.append('q', city);
    url.searchParams.append('appid', city);

    https.get(url);
};