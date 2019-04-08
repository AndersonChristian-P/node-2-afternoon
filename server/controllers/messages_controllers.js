let messages = []

let id = 0;


module.exports = {

  read: (req, res) => {
    res.send(messages)
  },

  create: (req, res) => {
    let { text, time } = req.body
    messages.push({ id, text, time }) // {} indicates that you are pushing in an object
    id++ // adjusts id that we setup on the global scope
    res.send(messages)
  },

  update: (req, res) => {
    let { id } = req.params
    message = req.body
    let index = messages.findIndex(message => +message.id === +id)
    messages.splice(index, 1, message)
    res.send(messages)
  },

  delete: (req, res) => {
    let { id } = req.params
    let index = messages.findIndex(message => +message.id === +id)
    messages.splice(index, 1)
    res.send(messages)
  }
}