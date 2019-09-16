const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const bodyParser = require('body-parser')
const config = require('../../webpack.config')
import router from './router'

const compiler = webpack(config)
const port = 3001

const app = express()

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(router)

app.listen(port, (err: any) => {
  if (err) {
    console.log('err:', err)
  }
  console.log(`server start in develop environment, Open up http://localhost:${port}/ in your browser.`)
})