import {getArgs} from "./helpers/args";

const initCLI = (msg?: string) => {
    const args = getArgs(process.argv)
    console.log(args)
};

initCLI();