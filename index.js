import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import customerRoutes from './routes/customer.js'

const app = express();


app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({limit: "5mb"}));
app.use(cors());

app.use('/customer', customerRoutes);

const CONNECTION_URL = 'mongodb+srv://AgogaMehm:Agonis-07082020@cluster0.iwq64.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: "true", useUnifiedTopology: "true" })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));

//mongoose.set('useFindAndModify', false);