const request = require('request')

const geocode = (address, callback) => {
    const API_mapbox = 'pk.eyJ1IjoiYXJpdHJhMTcwNCIsImEiOiJjanVxa3RpcTkweG1wNDRzanFvdjAwd3I5In0.xX_4RYRxnGiucfGJpYtDlQ' 
    const urlGeoCode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + API_mapbox + '&limit=1'
    console.log(urlGeoCode)

    request({url: urlGeoCode, json: true}, (error, response) => {
        
        if(error) {
            callback('Unable to connect to Mapbox services', undefined)
        } else if(response.body.error) {
            callback('Unable to find location', undefined)
        }  else if(response.body.features.length == 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const body = response.body

            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
        
     })
 }

 module.exports = geocode