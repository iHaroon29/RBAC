import http from 'http'
import app from './app'
import appConfig from './config/app.config'

const server = http.createServer(app)

server.listen(appConfig.expressConfig.port, '0.0.0.0', () =>
  console.log(`Listening at 8000`)
)
