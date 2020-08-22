const chalk = require("chalk");

console.log(chalk.bold(chalk.redBright('>>>> Strawberry Builder')))

const commands = [
    require('./commands/help'),
    require('./commands/usedModules')
]

const args = process.argv

if(args.length < 3) {
    return commands[0]()
}

if(args[2] === '') {
    
}