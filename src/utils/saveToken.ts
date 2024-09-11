import {printError, printSuccess} from "../domain/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "../domain/storage.service.js";

export const saveToken = async (token: string) => {
    if (!token.length) {
        printError('Не передан токен!')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('токен сохранен')
    } catch (e: unknown) {
        printError(e)
    }
}