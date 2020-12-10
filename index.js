const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('HOMEPAGE')
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), (req, res) => {

})