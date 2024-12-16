import { Sequelize } from 'sequelize'
import appConfig from './app.config'

const { dbConfig } = appConfig

const connection = new Sequelize(
  dbConfig.databaseName,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.hostname,
    port: dbConfig.port,
    dialect: 'mysql',
  }
)

;(async () => {
  try {
    await connection.authenticate()
    console.log('DB Authenticated')
    await connection.sync({ alter: true })
    console.log('DB Models Synced')
  } catch (e) {
    console.error(e)
  }
})()

export default connection
