var request = require('request')
const express = require('express')

const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getRtWetter', (req, res) => {
  request("https://api.openweathermap.org/data/2.5/weather?q=Reutlingen,de&appid=08b92a35b3e616b4e4441a33deea7a9e",
  function(error, response, body) {
	  var parsedBody = JSON.parse(body);
	  var temp = parsedBody["main"]["temp"];
	  res.send({temp});
})})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

