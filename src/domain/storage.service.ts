import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'

export const filePath = join(homedir(), 'weather-data.json');

export const tokenDictionary = {
    token: 'token',
    city: 'city',
    language: 'language',
}

export const saveKeyValue = async (key: string, value: string[] | string) => {
    let data: Record<string, any> = {};

    if (await isExist(filePath)){
        const file = await promises.readFile(filePath, 'utf8');
        data = JSON.parse(file);
    }
    if (Array.isArray(value)) {
        value.map((value: string) => data[key] = value);
    }

    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
}

export const getKeyValue = async (key: string) => {
    if (await isExist(filePath)){
        const file = await promises.readFile(filePath, 'utf8');
        const data = JSON.parse(file);
        return data[key];
    }
    return;
}

export const isExist = async (path: string) => {
    try {
        await promises.stat(path);
        return true;
    } catch (e : unknown) {
        return false;
    }
}