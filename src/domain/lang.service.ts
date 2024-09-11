import {printError, printSuccess} from "./log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";

let language = 'en';

export const setLanguage = async (lang: string) => {
    if (lang !== 'en' && lang !== 'ru') {
        printError('Поддерживаются только языки: en, ru');
        return;
    }
    language = lang;
    await saveKeyValue(TOKEN_DICTIONARY.language, lang);
    printSuccess(`Язык установлен на ${lang === 'en' ? 'английский' : 'русский'}`);
};
