import {getArgs} from "./helpers/args.js";
import {printError, printHelp, printSuccess} from "./domain/log.service.js";


const initCLI = (msg?: string) => {
    const args = getArgs(process.argv)
    console.log(args)

    if (args.h) {
        printHelp();
    }

    if (args.s) {
        printSuccess('suc');
    }

    if (args.t) {
        printError('no')
    }
};

initCLI();