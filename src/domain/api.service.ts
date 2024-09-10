import https from 'https';

const getWeather = async (city: string, key: string) => {
    const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    https.get(url)
};