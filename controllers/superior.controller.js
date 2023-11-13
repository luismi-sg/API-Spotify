const mongoose          = require('mongoose')
        mongoose.set('strictQuery' , false)

const superiorSchema = new mongoose.Schema(
    { premium : Array , session : Array },
    { collection : 'superior'}
)

const SuperiorSpotify = mongoose.model( 'SuperiorSpotify' , superiorSchema )


const getSuperior = async ( req , res ) => {
    
    const spotifyData = await SuperiorSpotify.find()

    const status = spotifyData
                ? 200
                : 204
    const statusText = spotifyData
                    ? 'Todo bien con Superior '
                    : 'No hay datos en Superior'

    res.status( status ).json( { spotifyData , status , statusText })
}

module.exports = {
    getSuperior
}