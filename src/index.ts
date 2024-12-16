import http from 'http'
import app from './app'

const server = http.createServer(app)

server.listen(8000, '0.0.0.0', () => console.log(`Listening at 8000`))
