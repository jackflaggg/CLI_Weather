import bgRed from 'chalk'
import bgGreen from 'chalk'
import bgCyan from 'chalk'

export const printError = (error: string) => {
    console.log(bgRed(' ERROR ') + ' ' + error)
}

export const printSuccess = (msg: string) => {
    console.log(bgGreen(' SUCCESS ') + ' ' + msg)
}

export const printHelp = () => {
    console.log(
        `${bgCyan(' HELP ')} 
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена`)
}