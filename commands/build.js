const chalk = require('chalk')
const fs = require('fs')
const prc = require('child_process')

module.exports = () => {
    console.log('>> 빌드중...')
    fs.exists(process.cwd + '/StrawberryFile.json', (exists) => {
        if(!exists) {
            console.log(chalk.bold(chalk.red('>>> 저런! StrawberryFile.json이 없어요! strawberry init으로 만들어주세요!')))
            return
        }
        const strawberryFile = require(process.cwd + '/StrawberryFile.json')
        for(let i = 0; i < strawberryFile.processes; i++) {
            console.log(chalk.bold('>> ' + (i + 1) + '번째 명령어 실행'))
            prc.exec()   
        }
    })
}