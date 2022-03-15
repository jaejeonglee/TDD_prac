const express = require('express');
const port = 3000;
const host = '0.0.0.0';

const app = express();
const productRoutes = require('./route');


app.use(express.json())

app.use('/api/products', productRoutes)

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.listen(port,host);

console.log(`App Running ${port}:${host}`)