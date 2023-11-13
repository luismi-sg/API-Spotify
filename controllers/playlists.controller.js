const mongoose          = require('mongoose')
        mongoose.set('strictQuery' , false)

const playlistSchema = new mongoose.Schema(
    { id : Number , cancion : String , artista : String , album : String , fecha : String , duracion : String , img : Object },
    { collection : 'playlist1' }
)

const PlaylistSpotify = mongoose.model('PlaylistSpotify' , playlistSchema)

const getPlaylist = async (req , res) => {

    let spotifyData = await PlaylistSpotify.find()

    let status      = spotifyData
                    ? 200
                    : 204

    let statusText  = spotifyData
                    ? 'Todo good con las playlist mtfk'
                    : 'Naa tas en naa'


    res.status( status ).json( { spotifyData , status , statusText })
}

const getPlaylistByCancion = async (req , res) => {
    const { palabra } = req.params

    let dataPlaylist = await PlaylistSpotify.find()
    
    const buscarPalabra = dataPlaylist.filter( eachPlaylist => eachPlaylist.cancion.toLowerCase().includes( palabra.toLowerCase() ))


    console.log( buscarPalabra )


    let data        = buscarPalabra

    let status      = buscarPalabra.length != 0
                    ? 200
                    : 204

    let statusText  = buscarPalabra
                    ? 'Toro bien'
                    : 'Toro mal'
    res.status( status ).json( { data , status , statusText })
}


module.exports = {
    getPlaylist,
    getPlaylistByCancion
}