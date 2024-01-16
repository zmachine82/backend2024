console.log('We did it!')
const express = require('express')
const app = express()

app.use(express.static('client'))


app.get('/lists', (req, res) => {
  res.json([
    "list 1", 
    "list 2"
  ])
})

app.get('/list-items', (req, res) => {
    res.json([
        "todo 1", 
        "todo 2"
      ])    
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})