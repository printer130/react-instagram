const TABLA = 'auth'
const bcrypt = require('bcrypt')
const auth = require('../../../auth/')

module.exports = (injectedStore) => {
  let store = injectedStore
  if (!store) {
    store = require('../../../store/dummy')
  }

  async function login(username, password) {
    const data = await store.query(TABLA, { username: username })
    console.log('[DATA---DATA]:', data)
    if (data.password === password) {
      return auth.sign(data)
    } else {
      throw new Error('password invalido')
    }
  }

  async function upsert(data) {
    // console.log('[data]:', data)
    const authData = {
      id: data.id,
    }

    if (data.username) {
      authData.username = data.username
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5)
    }
    return store.upsert(TABLA, authData)
  }

  return {
    upsert,
    login,
  }
}
