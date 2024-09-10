import {getArgs} from "./helpers/args.js";
import {printError, printHelp, printSuccess} from "./domain/log.service.js";
import {saveKeyValue} from "./domain/storage.service.js";

const saveToken = async () => {
    try {
        await saveKeyValue('token', args.t);
        printSuccess('токен сохранен')
    } catch (error) {
        printError(error.message)
    }
}
const initCLI = () => {
    const args = getArgs(process.argv)
    console.log(args)

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