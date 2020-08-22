const chalk = require('chalk')

module.exports = () => {
    console.log('>> 사용한 모듈')
    console.log('')
    console.log(chalk.bold('>> CHALK( https://github.com/chalk/chalk )'))
    console.log('색깔, 글씨 스타일을 콘솔에 적용하기 위해 사용')
    console.log('')
    console.log(chalk.bold('>> Express.JS( https://github.com/expressjs/express )'))
    console.log('웹훅을 이용해 깃에 커밋하면 자동으로 빌드할 수 있게 하기 위해 사용')
}