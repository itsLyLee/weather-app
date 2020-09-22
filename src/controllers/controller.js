const axios = require("axios")
const API_KEY = "920b55260aab534d9ad17f0fd61f485a"
const url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`

exports.renderHomePage = (req, res) => {
    res.render("index")
}

exports.getWeather = (req, res) => {
    const city = req.body.city
    axios.get(url).then((response) => {
        console.log(response)
    }).catch((error) => {
       console.log(error) 
    })
    
}

exports.renderAboutPage = (req, res) => {
    res.render("about")
}