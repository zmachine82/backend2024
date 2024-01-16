console.log('working'); 

const express = require('express');
const path = require('path');
const app = express()

app.use(express.static(path.resolve(__dirname, "./public")))

app.get('/stories', (req, res) => {
    res.json([
        "Story 1",
        "Story 2"
    ])
})



app.get('/read', (req, res) => {
  res.json({
    text: 'You walk into a room. There are two boxes on a table, one of wood and one of stone. Which one do you choose?',
    choices: ["wood", "stone"],

  })
})



app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})  