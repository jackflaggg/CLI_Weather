import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'

export const filePath = join(homedir(), '../weather-data.json');

export const saveKeyValue = async (key: string, value: any) => {
    const data: Record<string, any> = {};

    if (await isExist(filePath)){
        const file = await promises.readFile(filePath, 'utf8')
        data = JSON.parse(file)
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data))
}

export const isExist = async (path: string) => {
    try {
        await promises.stat(path);
        return true;
    } catch (e : unknown) {
        return false;
    }
}