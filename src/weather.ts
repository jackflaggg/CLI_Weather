import {getArgs} from "./helpers/args.js";
import {printError, printHelp, printSuccess} from "./domain/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./domain/storage.service.js";
import {getWeather} from "./domain/api.service.js";

export const saveToken = async (token: any) => {
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

export const getForCast = async () => {
    const weather = await getWeather('moscow');
    console.log(weather)
}
const initCLI = (): void | any => {
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp();
    }

    if (args.s) {

    }

    if (args.t) {
        return saveToken(args.t);
    }
    getForCast()
};

initCLI();