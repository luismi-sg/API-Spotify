const mongoose          = require('mongoose')
        mongoose.set('strictQuery' , false)


const mainSchema = new mongoose.Schema(
    { id : String , titulo : String , listar : Array},
    { collection : 'main'}
)

const MainSpotify = mongoose.model('MainSpotify' , mainSchema)


const getMain = async (req , res) => {
    let spotifyData    = await MainSpotify.find()

    let status      = spotifyData
                    ? 200
                    : 204
                    
    let statusText  = spotifyData
                    ? 'Se ha cargado todo el main'
                    : 'No hay datos en el main'

    res.status(status).json({spotifyData , status , statusText})}
 
const getMainByID = async (req , res) => {
    const { numero } = req.params
    const convertir = Number( numero )

    const buscar = await MainSpotify.find({ id : numero }) //preguntar bien esto!!
    let status = buscar === undefined ? 204
                : convertir === NaN ? 400
                : 200

    let statusText = buscar === undefined ? 'No encuentro contenido en Main'
                   : convertir === NaN ? 'El parametro no es numero'
                   : 'Todo bien en el main'

    
    res.status(status).json( {buscar , status , statusText })
}

module.exports = {
    getMain,
    getMainByID
}