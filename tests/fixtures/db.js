const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const Category = require('../../src/models/category')
const Task = require('../../src/models/task')
const User = require('../../src/models/user')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
  _id: userOneId,
  name: 'Ronny',
  email: 'ronny@test.com',
  password: 'testpass1234',
  tokens: [{
    token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
  }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
  _id: userTwoId,
  name: 'Celeste',
  email: 'celeste@test.com',
  password: 'testpass1234',
  tokens: [{
    token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
  }]
}

const userThreeId = new mongoose.Types.ObjectId()
const userThree = {
  _id: userThreeId,
  name: 'Maria',
  email: 'maria@test.com',
  password: 'testpass1234',
  tokens: [{
    token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
  }]
}

const categoryOne = {
  _id: new mongoose.Types.ObjectId(),
  description: 'Programming',
  user: userOne._id
}

const categoryTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: 'Home',
  user: userTwo._id
}

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: 'Finish Advanced JS course',
  completed: false,
  user: userOne._id,
  category: categoryOne._id
}

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: 'Buy new headphones',
  completed: true,
  user: userOne._id,
  category: categoryTwo._id
}

const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: 'Start math homework',
  completed: true,
  user: userTwo._id,
  category: categoryTwo._id
}

const setupDatabase = async () => {
  await Category.deleteMany()
  await Task.deleteMany()
  await User.deleteMany()
  await new Category(categoryOne).save()
  await new Category(categoryTwo).save()
  await new User(userOne).save()
  await new User(userTwo).save()
  await new Task(taskOne).save()
  await new Task(taskTwo).save()
  await new Task(taskThree).save()
}

module.exports = {
  categoryOne,
  categoryTwo,
  setupDatabase,
  taskOne,
  taskTwo,
  taskThree,
  userOneId,
  userOne,
  userTwoId,
  userTwo,
  userThreeId,
  userThree
}
