const express = require('express')
const cors = require('cors')
const app = express()
global.models = require('./models')
const PORT = 3001
const Location = require('./classes/location')

app.use(cors())
app.use(express.json())



//this will be for the admin side
app.get('/view-locations', (req,res) => {
    res.send('get test')
})

//set up post to add the lat/long to the db
app.post('/add-location', async (req,res) => {
    const location = new Location(req.body.lat, req.body.long)

    let locationObj = await models.DesiredCoordinate.create({
        latitude: location.lat,
        longitude: location.long
    })

    res.status(200).send() 
})


app.listen(PORT, () => {
    console.log('Server is running...')
})