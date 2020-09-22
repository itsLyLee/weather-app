exports.renderHomePage = (req, res) => {
    res.render("index")
}

exports.getWeather = (req, res) => {
    res.send("Your form has been submitted!")
}

exports.renderAboutPage = (req, res) => {
    res.render("about")
}