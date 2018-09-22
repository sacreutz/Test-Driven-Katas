const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.send(`<h1> Home <h1>`);
})

app.get('/puppies', (req, res) => {
  res.send(`<h1> puppies </h1>`)
})

app.get('/kittens', (req, res) => {
  res.send(`<h1> kittens </kittens>`)
})

const PORT = 1337
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});


