const mongoose  = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.gnde3nb.mongodb.net/lloydsDb?retryWrites=true&w=majority`
const uri = `mongodb+srv://gappie1000:brBcumazCZnRK4D1@cluster0.gnde3nb.mongodb.net/lloydsDb?retryWrites=true&w=majority`

const conneCtion = mongoose.connect(uri, connectionParams)
.then(()=> console.log('connected to the cloud atlas'))
.catch((err)=> console.log(err));

module.exports = conneCtion