const db = {
  user: [
    {
      id: '1',
      name: 'leo',
    },
    {
      id: '2',
      name: '1eo',
    },
    {
      id: '3',
      name: '2eo',
    },
  ],
}

async function list(tabla) {
  return await db[tabla]
}

async function get(tabla, id) {
  let collection = await list(tabla)
  return collection.filter((item) => item.id === id)[0] || null
}

async function upsert(tabla, data) {
  if (!tabla[tabla]) {
    db[tabla] = []
  }
  await db[tabla].push(data)
  console.log(db)
}

async function remove(tabla, id) {
  return await true
}

async function query(tabla, q) {
  let colection = await list(tabla)
  let keys = Object.keys(q)
  let key = keys[0]

  return colection.filter((item) => item[key] === q[key])[0] || null
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
}
