const mongoose = require('mongoose')
        mongoose.set('strictQuery' , false)

const headerSchema = new mongoose.Schema(
    { h1 : Object , menu : Array , legal : Array },
    { collection : 'header'}
)

const HeaderSpotify = mongoose.model('HeaderSpotify' , headerSchema )

const getHeader = async ( req , res ) => {
    
    let spotifyData  = await HeaderSpotify.find()
    let status      = spotifyData ? 200 : 204
    let statusText  = spotifyData ? 'Todo bien con Header' : 'No hay content en header'

    res.status( status ).json( { spotifyData , status , statusText })
}

module.exports = {
    getHeader
}