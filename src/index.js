'use strict'

const mongoose = require("mongoose");
const app = require("./app");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://erick:erick123@ds335957.mlab.com:35957/heroku_12vhs6tw', { useNewUrlParser: true }).then(()=>{
    console.log('Se encuentra conectado a la Base de Datos en la nube');

    app.set('port', process.env.PORT || 3000 );
    app.listen(app.get('port'), ()=>{
        console.log(`El servidor esta corriendo en el puerto: '${app.get('port')}'`);
    });
}).catch(err => console.log(err));