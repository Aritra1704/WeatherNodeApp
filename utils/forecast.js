 const request = require('request')

 const API_dark_sky = '62a0bdddff6d2306187480b1af18b9c7' 
 

 const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' + API_dark_sky + '/' + latitude + ',' + longitude
    console.log(url)

    request({url: url, json: true}, (error, response) => {
    
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const body = response.body
            callback(undefined, {
                temperature: body.currently.temperature,
                rain: body.currently.precipProbability,
                summary: body.daily.data[0].summary
            })
        }
     })
 }

 module.exports = forecast