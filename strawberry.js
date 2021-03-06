#!/usr/bin/env node

const chalk = require("chalk");

console.log(chalk.bold(chalk.redBright('>>>> Strawberry Builder')))

const commands = [
    require('./commands/help'),
    require('./commands/usedModules'),
    require('./commands/init'),
    require('./commands/build'),
    require('./commands/listenWebhook')
]

const args = process.argv

try {
    if(args.length < 3) {
        return commands[0]()
    }

    if(args[2] === 'usedmodule') {
        return commands[1]()
    }

    if(args[2] === 'init') {
        return commands[2]()
    }

    if(args[2] === 'build') {
        return commands[3]()
    }

    if(args[2] === 'listenwebhook') {
        return commands[4]()
    }
    
    return commands[0]()
} catch(error) {
    console.error(error)
    console.log(chalk.bold(chalk.red('>>> 저런! 명령어를 실행하는데 오류가 났어요! 위의 오류 내용을 확인해 개발자에게 전송해주세요!')))
    process.exit(1)
}
