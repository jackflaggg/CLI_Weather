import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'

export const filePath = join(homedir(), 'weather-data.json');

export const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city',
}

export const saveKeyValue = async (key: string, value: any) => {
    let data: Record<string, any> = {};

    if (await isExist(filePath)){
        const file = await promises.readFile(filePath, 'utf8')
        data = JSON.parse(file)
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data))
}

export const getKeyValue = async (key: string) => {
    if (await isExist(filePath)){
        const file = await promises.readFile(filePath, 'utf8')
        const data = JSON.parse(file);
        return data[key]
    }
    return null
}

export const isExist = async (path: string) => {
    try {
        await promises.stat(path);
        return true;
    } catch (e : unknown) {
        return false;
    }
}