const express = require('express');
const port = 3000;
const host = '0.0.0.0';

const app = express();
const productRoutes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ljj100011:wowjd!5256@cluster1.q2pic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{
    useNewUrlParser: true
}).then(()=> console.log('mongoDB connected..'))
.catch (err => console.log(err))

app.use(express.json())

app.use('/api/products', productRoutes)

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.listen(port,host);

console.log(`App Running ${port}:${host}`)