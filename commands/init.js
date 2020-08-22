const chalk = require('chalk')
const fs = require('fs')

module.exports = () => {
    console.log('>> 설정중...')
    fs.writeFile(process.cwd() + '/StrawberryFile.json', '{\n\t"projectName": "흠흠",\n\t"projectDesc": "이 파일의 이름을 바꾸세요",\n\t"processes": [\n\t\t{"processName": "node", "runTimeMs": 1000, "processArgument": "hello.js"}\n\t],\n\t"postProcesses": [\n\t\t{"processName": "node", "processArgument": "hello.js"}\n\t]\n}', (err) => {
        if(err) {
            console.error(err)
            console.log(chalk.bold(chalk.red('>>> 저런! 파일을 생성하는데 오류가 났어요! 위의 오류 내용을 확인해 개발자에게 전송해주세요!')))
            return
        }
        console.log(chalk.bold(chalk.green('>>> 파일을 생성했어요! StrawberryFile.json을 확인해주세요!')))
    })
}