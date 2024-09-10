import { homedir } from 'os'
import { join, basename, dirname, extname } from 'path'

export const filePath = join(homedir(), '../weather-data.json');

export const saveKeyValue = (key: string, value: any) => {
    console.log(basename(filePath));
    console.log(dirname(filePath));
    console.log(extname(filePath));
}