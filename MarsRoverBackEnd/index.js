const express = require('express')
const sequelize = require('./db')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', async(req, res) => {
    try {
        const seq = await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      res.status(200).send('ok')
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})
app.listen(3000, () => {console.log('Starting at port 3000')});
