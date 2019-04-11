const request = require('request')
 
const url = 'https://api.darksky.net/forecast/62a0bdddff6d2306187480b1af18b9c7/17.461795, 78.353516'

request({url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.currently)

    // console.log(response.body.currently)

    if(error) {
        console.log('Unable to connect to weather service');
    } else if(response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.daily.data[0].summary + ' It\'s currently ' + response.body.currently.temperature + ' degrees out. With ' + response.body.currently.precipProbability + ' percent chance of rain.')
    }
    
})
