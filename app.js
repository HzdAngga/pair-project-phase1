const express = require('express')
const igdb = require('igdb-api-node').default;
const client = igdb('e1ho2tms7rwzp63wxd0cjaz6e9yjly', 'YOUR_TWITCH_APP_ACCESS_TOKEN')
const app = express()
const router = require('./routes/index')
const port = 3000


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(router)
app.listen(port, () => {
    console.log(`berhasil jalan port ${port}nya yeay!!!`)
})


