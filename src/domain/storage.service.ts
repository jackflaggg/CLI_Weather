import { homedir } from 'os'
import { join, basename, dirname, extname, relative } from 'path'

export const filePath = join(homedir(), '../weather-data.json');

export const saveKeyValue = (key: string, value: any) => {
    console.log(basename(filePath));
    console.log(dirname(filePath));
    console.log(extname(filePath));
    console.log(relative(filePath, dirname(filePath)));
}