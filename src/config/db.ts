import { Sequelize } from 'sequelize'

const connection = new Sequelize('rbac', 'root', 'admin', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
})

connection
  .authenticate()
  .then(() => connection.sync())
  .catch((e) => console.log(e))

export default connection
