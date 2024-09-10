import { homedir } from 'os'
import { join } from 'path'

export const saveKeyValue = (key: string, value: any) => {
    console.log(join(homedir(), '../weather-data.json'));
}