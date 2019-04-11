const request = require('request')
 
const url = 'https://api.darksky.net/forecast/62a0bdddff6d2306187480b1af18b9c7/37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})
