const TABLA = 'auth'
const bcrypt = require('bcrypt')
const auth = require('../../../auth/')

module.exports = (InjectedStore) => {
  let store = new InjectedStore()
  // if (!store) {
  //   store = require('../../../store/dummy')
  // }

  async function login(username, password) {
    const data = await store.query(TABLA, { username: username })
    return bcrypt.compare(password, data.password).then((iguales) => {
      if (iguales === true) {
        return auth.sign(data)
      } else {
        return new Error('password invalido')
      }
    })
  }

  async function upsert(data) {
    const authData = {
      id: data.id,
    }

    if (data.username) {
      authData.username = data.username
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5)
      // authData.password = data.password
    }
    // console.log('[authData]:', authData)
    return store.upsert(TABLA, authData)
  }

  return {
    upsert,
    login,
  }
}
