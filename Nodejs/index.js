const express = require("express");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

// express app
const app = express();

// CORS enabling
app.use(cors({
    origin: '*',
    methods: ['POST','GET','PUT','DELETE']
}));

// Connecting to mongodb
mongoose.connect("mongodb://localhost/clementius");
mongoose.Promise = global.Promise;

// Body-Parser
app.use(bodyParser.json());

app.use('/api', routes);

// Error handling
app.use(function(error, request, response){
    response.send({status: "error", message: error._message});
});

//Initialise the app
app.listen(3000, function(){
    console.log("server is listening");
});