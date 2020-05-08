module.exports = {
  api: {
    port: process.env.PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecreta!',
  },
  db: {
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    dbName: process.env.DB_DBNAME || ''
  }
}
