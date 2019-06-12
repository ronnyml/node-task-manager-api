const express = require('express')
const router = new express.Router()

const auth = require('../middleware/auth')
const constants = require('../constants')
const Category = require('../models/category')

router.get('/categories', auth, async (req, res) => {
  try {
    const categories = await Category.find({ user: req.user._id })
    res.send(categories)
  } catch (error) {
    res.status(500).send()
  }
})

router.get('/categories/:id', auth, async (req, res) => {
  const _id = req.params.id
  try {
    const category = await Category.findOne({ _id, user: req.user._id })
    if (!category) {
      return res.status(404).send()
    }
    res.send(category)
  } catch (error) {
    res.status(500).send()
  }
})

router.post('/categories', auth, async (req, res) => {
  const category = Category({
    ...req.body,
    user: req.user._id
  })

  try {
    await category.save()
    res.status(201).send(category)
  } catch (error) {
    res.status(400).send('Error! ' + error)
  }
})

router.patch('/categories/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['description']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  if (!isValidOperation) {
    return res.status(400).send({ error: constants.ERROR_INVALID_UPDATE })
  }

  const _id = req.params.id
  try {
    const category = await Category.findOne({ _id, user: req.user._id })
    if (!category) {
      return res.status(404).send()
    }
    updates.forEach((update) => {
      category[update] = req.body[update]
    })
    await category.save()
    res.send(category)
  } catch (error) {
    res.status(500).send()
  }
})

router.delete('/categories/:id', auth, async (req, res) => {
  const _id = req.params.id
  try {
    const category = await Category.findOneAndDelete({ _id, user: req.user._id })
    if (!category) {
      return res.status(404).send()
    }
    res.send(category)
  } catch (error) {
    res.status(500).send()
  }
})

module.exports = router
