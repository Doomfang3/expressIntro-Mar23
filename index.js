const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (request, response) => {
  response.render('home')
})

app.get('/about', (request, response) => {
  const currentUser = 'Josh'

  const someTest = `<script>window.alert('Hello');</script>`

  response.render('pizza', { name: currentUser, hobbies: ['Surf', 'OW', 'Dogs'], test: someTest })
})

app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
})
