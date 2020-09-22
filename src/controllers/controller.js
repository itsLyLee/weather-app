const axios = require("axios")
const API_KEY = "920b55260aab534d9ad17f0fd61f485a"


exports.renderHomePage = (req, res) => {
    res.render("index")
}

exports.getWeather = (req, res) => {
    const city = req.body.city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    axios.get(url).then((response) => {
        res.render("index", {
            weather: `It is currently ${response.data.main.temp} in ${response.data.name}.`
        })
    }).catch((error) => {
       console.log(error) 
    })
    
}

exports.renderAboutPage = (req, res) => {
    res.render("about")
}