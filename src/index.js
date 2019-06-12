const app = require('./app')
const constants = require('./constants')

const port = process.env.PORT

app.listen(port, () => {
  console.log(constants.SERVER_UP(port))
})
