import {getArgs} from "./helpers/args.js";
import {printError, printHelp, printSuccess} from "./domain/log.service.js";
import {saveKeyValue} from "./domain/storage.service.js";

export const saveToken = async (token: any) => {
    try {
        await saveKeyValue('token', token);
        printSuccess('токен сохранен')
    } catch (e: unknown) {
        printError(e)
    }
}
const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        printHelp();
    }

    if (args.s) {

    }

    if (args.t) {
        return saveToken(args.t);
    }
};

initCLI();