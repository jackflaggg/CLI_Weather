import {getArgs} from "./helpers/args.js";
import {printError, printHelp, printSuccess, printWeather} from "./domain/log.service.js";
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from "./domain/storage.service.js";
import {getWeather} from "./domain/api.service.js";
import {isAPIError} from "./models/types.errors.js";

export const saveToken = async (token: string) => {
    if (!token.length) {
        printError('Не передан токен!')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('токен сохранен')
    } catch (e: unknown) {
        printError(e)
    }
}

export const saveCity = async (city: any) => {
    if (!city.length) {
        printError('Не передан город!')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('город сохранен')
    } catch (e: unknown) {
        printError(e)
    }
}

export const getForCast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather ,getWeather(weather.weather[0].icon))
        console.log(weather)
    } catch (error) {
        if (isAPIError(error)){
            if (error.response?.status === 404){
                printError('неверно указан город')
            }
            if (error.response?.status === 401){
                printError('неверно указан токен')
            }
            printError('серверная ошибка')
        }
        console.log('непредвиденная ошибка: ' + error)
    }
}
const initCLI = (): void | any => {
    const args = getArgs(process.argv);

    if (args.h) {
        return printHelp();
    }

    if (args.s) {
        return saveCity(args.s)
    }

    if (args.t) {
        return saveToken(args.t as string);
    }

    return getForCast()
};

initCLI();