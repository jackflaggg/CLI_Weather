import {getArgs} from "./helpers/args.js";
import {printError, printHelp,  printWeather} from "./domain/log.service.js";
import {getKeyValue, TOKEN_DICTIONARY} from "./domain/storage.service.js";
import {getWeather} from "./domain/api.service.js";
import {isAPIError} from "./models/types.errors.js";
import {setLanguage} from "./domain/lang.service";
import {saveCity} from "./utils/saveCities";
import {saveToken} from "./utils/saveToken";

export const getForCast = async () => {
    try {
        const city = process.env.CITY ? process.env.CITY.split(' ') : await getKeyValue(TOKEN_DICTIONARY.city);

        for (const cityElement of city) {
            const weather = await getWeather(cityElement.trim());
            printWeather(weather ,getWeather(weather.weather[0].icon))
            console.log(weather)
        }

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

const initCLI = () => {
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

    if (args.l) {
        return setLanguage(args.l as string);
    }

    return getForCast()
};

initCLI();