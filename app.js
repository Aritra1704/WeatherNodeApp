 const request = require('request')
 
 const API_dark_sky = '62a0bdddff6d2306187480b1af18b9c7' 
 const url = 'https://api.darksky.net/forecast/' + API_dark_sky + '/17.461795, 78.353516'
 console.log(url)
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

 const mapbox_place = 'Hyderabad'
 const API_mapbox = 'pk.eyJ1IjoiYXJpdHJhMTcwNCIsImEiOiJjanVxa3RpcTkweG1wNDRzanFvdjAwd3I5In0.xX_4RYRxnGiucfGJpYtDlQ' 
 const urlGeoCode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + mapbox_place + '.json?access_token=' + API_mapbox + '&limit=1'
 console.log(urlGeoCode)

 request({url: urlGeoCode, json: true}, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.currently)

    // console.log(response.body.currently)

    if(error) {
        console.log('Unable to connect to weather service');
    } else if(response.body.error) {
        console.log('Unable to find location')
    } else {
        const body = response.body
        console.log(' Latitude: ' + body.features[0].center[1] + ' Longitude: ' + body.features[0].center[0])
    }
    
})