
const request = require('request')
const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b3a1204b8fb002ed203de101b571ae3f&query='+latitude+','+longitude 
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect', undefined)
        } else if(body.error){
            callback(undefined,'Forecast for place not found')
        } else {
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+ body.current.temperature+'ºC outside but feels like '+
                body.current.feelslike +'ºC')
        }
    })
}

module.exports = forecast