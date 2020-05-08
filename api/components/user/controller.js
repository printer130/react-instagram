const { nanoid } = require('nanoid')
const TABLA = 'user'
const auth = require('../auth')
// const MongoLib = require('../../../store/mongo')

module.exports = (InjectedStore) => {
  let store = new InjectedStore()
  // console.log(store)
  // if (!store) {
  //   store = require('../../../store/dummy')
  // }

  async function list() {
    return await store.list(TABLA)
  }

  async function get(id) {
    return await store.get(TABLA, id)
  }

  async function post(data) {
    const user = {
      name: data.name,
      username: data.username,
    }
    console.log(null)
    let notAvailableUser = await store.query(TABLA, { username: user.username })
    if (notAvailableUser) {
      throw new Error('Usuario invalido')
    }

    if (data.id) {
      user.id = data.id
    } else {
      user.id = nanoid()
    }

    if (data.password || data.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: data.password,
      })
    }
    return store.upsert(TABLA, user)
  }

  async function borrado(id) {
    return await store.remove(TABLA, id)
  }

  return {
    list,
    get,
    post,
    borrado,
  }
}
