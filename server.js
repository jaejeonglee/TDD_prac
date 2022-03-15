const express = require('express');
const port = 3000;
const host = '0.0.0.0';

const app = express();
app.get('/', (req,res) => {
    res.send('Hello World');
});

app.listen(port,host);

console.log(`App Running ${port}:${host}`)