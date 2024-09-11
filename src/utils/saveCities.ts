import {printError, printSuccess} from "../domain/log.service";
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from "../domain/storage.service";

export const saveCity = async (city: string[]) => {
    if (!city.length) {
        printError('Не передан ни один город!')
        return;
    }
    try {
        const existingCities = await getKeyValue(TOKEN_DICTIONARY.city) || [];
        const updatedCities = Array.from(new Set([...existingCities, ...city]));
        await saveKeyValue(TOKEN_DICTIONARY.city, updatedCities);
        printSuccess('города сохранены')
    } catch (e: unknown) {
        printError(e)
    }
}