console.clear()
console.log('🍏  Soy la API de Spotify')

const express           = require('express')
const cors              = require('cors')
const mongoose          = require('mongoose')
        mongoose.set('strictQuery' , true)
const { Router }        = require('express')


const { getIndex }                              = require('./controllers/index.controller')
const { getHeader }                             = require('./controllers/header.controller')
const { getMain, getMainByID }                  = require('./controllers/main.controllers')
const { getPlaylist, getPlaylistByCancion }     = require('./controllers/playlists.controller')
const { getSuperior }                           = require('./controllers/superior.controller')

const app       = express()
const router    = Router()

app.use( express.json() )
app.use( express.urlencoded( { extended : false }))
app.use( cors() )
app.use( router )

let bbdd = 'mongodb+srv://lmsg1191:conectarmongo@cluster0.5jxyu5a.mongodb.net/SPOTIFY' || 'mongodb://127.0.0.1:27017/spotify'

const main = async () => await mongoose.connect(bbdd)
        .then( ()=> console.log(`MongoDB base de datos spotify conectada 👽`))

main()

router.route('/')
        .get( getIndex )

router.route('/main')
        .get( getMain )
        // .post( postMain )
        // .put( putMain )
        // .delete( deleteMain )

router.route('/main/id/:numero')
        .get( getMainByID )

router.route('/header')
        .get( getHeader )

router.route('/superior')
        .get( getSuperior )

router.route('/playlist')
        .get( getPlaylist )

router.route('/playlist/cancion/:palabra')
        .get( getPlaylistByCancion )


app.listen( 4000 , () => {
    console.log(`🍏 Esta es la API de Spotify `)
})

module.exports = app