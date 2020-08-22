const chalk = require('chalk')

module.exports = () => {
    console.log('>> 도움말')
    console.log('>>')
    console.log(chalk.bold('>> 기본적인것'))
    console.log('>> usedmodule - 사용된 모듈을 출력합니다.')
    console.log('>> help - 지금 보고 있는 도움말을 출력합니다.')
    console.log('>>')
    console.log(chalk.bold('>> 빌드'))
    console.log('>> build - 현재 디렉터리를 빌드합니다.')
    console.log('>> init - StrawberryFile.json을 만듭니다.')
    console.log('>> listenwebhook - 푸쉬가 되면 현재 디렉터리를 빌드합니다. 이스케이프 문자: ^C')
    console.log()
}