const chalk = require('chalk')
const fs = require('fs')
const Express = require('express')
let app

module.exports = () => {
    console.log('>> 서버가 로딩중입니다...')
    app = Express()
    app.use(Express.json())
    app.get('/', (req,res) => {
        if(req.headers.accept !== 'application/json') {
            return res.send('이것은 Strawberry Github 웹훅입니다. 꼭 서버의 포트를 열어주세요. 그리고 타입은 꼭 application/json으로 해주시기 바랍니다.')
        }
        return res.json({invaild: true})
    })
    app.post('/', (req,res) => {
        if(req.body.repository !== undefined) {
            console.log('>> ' + req.body.pusher.name + '님이 푸시를 하셨습니다. 빌드를 시작합니다.')
            const build = require('./build')
            build()
        }
        return res.json({stat: 'OK'})
    })
    app.listen(60214, () => {
        console.log('>> 서버가 열렸습니다. 60214포트를 열어주시고, http://아이피:60214 로 웹훅을 등록해주세요.')
    })
}