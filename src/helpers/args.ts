export const getArgs = (args: string) => {
    const res = {};
    const [executor, file, ...rest] = args;

    rest.forEach((value: string, index: number, arr: string[]) => {
        if (value.charAt(0) === '-') {
            if (index === arr.length - 1) {
                res[value.substring(1)] = true;
            } else if (arr[index+1].charAt(0) !== '-'){
                res[value.substring(1)] = arr[index+1];
            } else {
                res[value.substring(1)] = true;
            }
        }
    })
    return res;
};