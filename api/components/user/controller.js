const { nanoid } = require('nanoid')
const TABLA = 'user'
const auth = require('../auth')

module.exports = (injectedStore) => {
  let store = injectedStore
  if (!store) {
    store = require('../../../store/dummy')
  }

  function list() {
    return store.list(TABLA)
  }

  function get(id) {
    return store.get(TABLA, id)
  }

  async function post(data) {
    const user = {
      name: data.name,
      username: data.username,
    }

    if (data.id) {
      user.id = data.id
    } else {
      user.id = nanoid()
    }
    // console.log(user)
    // console.log('[user]: ', user)

    if (data.password || data.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: data.password,
      })
    }
    return store.upsert(TABLA, user)
  }

  function borrado(id) {
    return store.remove(TABLA, id)
  }

  return {
    list,
    get,
    post,
    borrado,
  }
}
