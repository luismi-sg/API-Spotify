
const mongoose = require('mongoose')
        mongoose.set('strictQuery' , false)

const spotifySchema = new mongoose.Schema(
    { header : Object , superior : Object , main : Array , playlist1 : Array , playlistHover : Object},
    { collection : 'general' }
)

const Spotify = mongoose.model('Spotify' , spotifySchema )

const getIndex      = async (req ,  res) => {
    let spotifyData = await Spotify.find()
    let status      = spotifyData ? 200 : 204
    let statusText  = spotifyData ? 'Todo bien con Spotify' : 'No hay contenido en la API de Spotify' 

    res.status( status ).json({ spotifyData , status , statusText })}

module.exports = {
    getIndex
}