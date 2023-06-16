const express = require('express');
const mongoose = require('mongoose')
require("dotenv").config();
const userRoutes =  require("./routes/user")
const carRoutes =  require("./routes/car")
const rentRoutes =  require("./routes/rent")
const returncarRoutes =  require("./routes/returncar")

const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor


//middlewares
app.use(express.json())
app.use('/api', userRoutes )
app.use('/api',  carRoutes)
app.use('/api',  rentRoutes)
app.use('/api',  returncarRoutes)


//routes
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});


//mongoDb Connection
mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('Connected to mongoDB Atlas'))
        .catch((error) => console.error(error))
        


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});