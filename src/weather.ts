import {getArgs} from "./helpers/args.js";
import {printError, printHelp, printSuccess} from "./domain/log.service.js";
import {saveKeyValue} from "./domain/storage.service.js";


const initCLI = (msg?: string) => {
    const args = getArgs(process.argv)
    console.log(args)

    if (args.h) {
        printHelp();
    }

    if (args.s) {

    }

    if (args.t) {
        saveKeyValue('token', args.t);
    }
};

initCLI();