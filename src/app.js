const express = require('express')

require('./db/mongoose')
const categoryRouter = require('./routers/category')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use(categoryRouter)
app.use(userRouter)
app.use(taskRouter)

module.exports = app
