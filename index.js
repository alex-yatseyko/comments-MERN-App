const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api/comments', require('./routes/comments.route.js'))

if (process.env.NODE_ENB === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = /* process.env.PORT || */ 5000
const mongoUri = 'mongodb://admin:12345678a@ds033380.mlab.com:33380/test-app-ya'

async function start() {
    try{
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch(e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

app.listen(PORT, () => {
    console.log(`App has been started on port ${PORT}`)
})