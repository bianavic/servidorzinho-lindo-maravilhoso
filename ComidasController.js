
const repository = require('/ComidasRepositorio')
const getAll = () => {
    return repository.pratos
}
const add = (comida) => {
  comida.id = Math.random().toString(36).substr(-8)  
  getAll().comidas.push(comida)
}
const remove = (id) => {
  let comidasQueFicaram = getAll()

  getAll.comidas = comidasQueFicaram.comidas.filter((comida => {
  return comida.id !== id
}))
}
module.exports = {
  pratos,  
  getAll,
    add,
    remove
}