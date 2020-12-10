const express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'))

const ehbs = require('express-handlebars')

app.engine('hbs', ehbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layout',
    partialsDir: __dirname + '/views/partials',
}))

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('homepage')
})


app.get('/sortAtoZ',(req,res)=>{
    res.render('AtoZ')
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), (req, res) => {

})