const { MongoClient, ObjectId } = require('mongodb')
const config = require('../config')

// mongodb+srv://<username>:<password>@cluster0-yfxun.mongodb.net/test?retryWrites=true&w=majority

// const URI = `mongodb+srv://${config.db.user}:${config.db.password}@cluster0-yfxun.mongodb.net/${config.db.dbName}/?retryWrites=true&w=majority`
const URI = 'mongodb+srv://leonardo_movies:a3b8pn0o0pd0l4pa1@cluster0-yfxun.mongodb.net/instagram'

class MongoLib {
  constructor() {
    this.client = new MongoClient(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    this.mongoName = 'instagram'
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err)
          }
          resolve(this.client.db(this.mongoName))
          console.log('Mongo db connected!')
        })
      })
    }
    return MongoLib.connection
  }
  list(collection, query) {
    return this.connect().then((db) => {
      return db.collection(collection).find(query).toArray()
    })
  }

  get(collection, id) {
    return this.connect().then((db) => {
      return db.collection(collection).findOne({ _id: ObjectId(id) })
    })
  }

  upsert(collection, data) {
    return this.connect().then((db) => {
      return db.collection(collection).insertOne(data)
    })
  }

  async query(collection, username) {
    // console.log('[TABLA]')
    // console.log('[Q]')
    let users = await this.list(collection)
    let keys = Object.keys(username)
    let key = keys[0]
    return users.filter(item => item[key] === username[key])[0] || null
    // return this.connect().then((db) => {
    //   return db.collection(collection).findOne({ username: username })
    // })
    // let colection = await list(tabla)
    // let keys = Object.keys(q)
    // let key = keys[0]

    // return colection.filter((item) => item[key] === q[key])[0] || null
  }
}

module.exports = MongoLib
