import { config } from 'dotenv'

config()

export default {
  expressConfig: {
    port: Number(process.env.PORT) || 8000,
  },
  dbConfig: {
    hostname: process.env.DB_LOCAL_HOST || 'missing_host',
    port: Number(process.env.DB_LOCAL_PORT) || 3306,
    username: process.env.DB_LOCAL_USERNAME || 'missing_username',
    password: process.env.DB_LOCAL_PASSWORD || 'missing_password',
    databaseName: process.env.DB_LOCAL_DBNAME || 'missing_dbname',
  },
}
