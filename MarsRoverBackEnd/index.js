const {DataTypes} = require('sequelize')

const express = require('express')
const sequelize = require('./db')
const plateau = require('./models/plateau')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', async(req, res) => {
  const PlateauModel = plateau(sequelize, DataTypes)
  const result = await PlateauModel.findAll()
  res.status(200).json(result)
})
app.listen(3000, () => {console.log('Starting at port 3000')});
