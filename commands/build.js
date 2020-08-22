const chalk = require('chalk')
const fs = require('fs')
const prc = require('child_process')

module.exports = () => {
    console.log('>> 빌드중...')
    fs.exists(process.cwd() + '/StrawberryFile.json', (exists) => {
        if(!exists) {
            console.log(chalk.bold(chalk.red('>>> 저런! StrawberryFile.json이 없어요! strawberry init으로 만들어주세요!')))
            return
        }
        const strawberryFile = require(process.cwd() + '/StrawberryFile.json')
        for(let i = 0; i < strawberryFile.processes.length; i++) {
            console.log(chalk.bold('>> ' + (i + 1) + '번째 명령어 실행'))
            prc.exec(strawberryFile.processes[i].processName + ' ' + strawberryFile.processes[i].processArgument, (err, stdout, stderr) => {
                // build
                if(err) {
                    if(err.message.includes('Command failed')) {
                        console.log(chalk.bold('빌드 오류: \n' + err.stack))
                        console.log(chalk.bold(chalk.red('>>> ' + (i + 1) + '번째 빌드를 실패하였습니다.')))
                        return
                    }
                    console.error(err)
                    console.log(chalk.bold(chalk.red('>>> ' + (i + 1) + '번째 빌드에서 Strawberry 자체 오류가 났어요. 위의 내용을 개발자에게 보내주세요!')))
                    return
                }
                console.log('[' + (i + 1) + '번째 로그]\n' + stdout)
                console.log(chalk.bold(chalk.green('>>> ' + (i + 1) + '번째 빌드에 성공하였습니다.')))

                // Post Commands
                console.log(chalk.bold(chalk.blue('>>> 모든 빌드에 성공했습니다. Post 명령어들을 실행합니다.')))
                for(let i = 0; i < strawberryFile.postProcesses.length; i++) {
                    console.log(chalk.bold('>> ' + (i + 1) + '번째 Post 명령어 실행'))
                    prc.exec(strawberryFile.postProcesses[i].processName + ' ' + strawberryFile.postProcesses[i].processArgument, (err, stdout, stderr) => {
                        if(err) {
                            if(err.message.includes('Command failed')) {
                                console.log(chalk.bold(chalk.red('Post 명령어 실행 오류: \n' + err.stack)))
                                console.log(chalk.bold(chalk.red('>>> ' + (i + 1) + '번째 Post 명령어 실행에서 오류가 났습니다.')))
                                return
                            }
                            console.error(err)
                            console.log(chalk.bold(chalk.red('>>> ' + (i + 1) + '번째 Post 명령어 실행에서 Strawberry 자체 오류가 났어요. 위의 내용을 개발자에게 보내주세요!')))
                            return
                        }
                        console.log('[' + (i + 1) + '번째 로그]\n' + stdout)
                        console.log(chalk.bold(chalk.green('>>> ' + (i + 1) + '번째 Post 명령어 실행에 성공하였습니다.')))
                    })
                }
            })
        }
        
    })
}