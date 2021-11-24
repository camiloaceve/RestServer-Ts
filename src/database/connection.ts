import { Sequelize } from 'sequelize'

const db = new Sequelize('ts-restserve', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
  });

export default db