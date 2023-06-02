const express = require(`express`);
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
const dotenv = require(`dotenv`)
const mongoose = require('mongoose')

dotenv.config({path : `.env`})

const playersRouter = require('./routes/playersRoute.js');

/*MONGODB CONNECTION START*/
const MONGO_URL = process.env.MONGO_URL ;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB")
})
mongoose.connection.on('error', (err) => {
    console.log("Error Connecting to Database", err)
})
/*MONGODB CONNECTION END*/

app.use(cors());
app.use(express.json());
app.options('*', cors());
app.use('/players', playersRouter);


app.get('/', (req, res) => {
    res.send(`Welcome to Civil20 : Full Stack Assignment !!!    Made by Trisha Sahu`);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})