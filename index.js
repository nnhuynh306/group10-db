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

app.use('/about', require(__dirname + '/routes/about.js'));
app.use('/blog', require(__dirname + '/routes/blog.js'));
app.use('/featured', require(__dirname + '/routes/featured.js'));
app.use('/recipes', require(__dirname + '/routes/recipes.js'));
app.use('/videos', require(__dirname + '/routes/videos.js'));
app.use('/sort', require(__dirname + '/routes/sort.js'));


app.get('/', (req, res) => {
    res.locals.pageTitle = `GROUP 10`
    res.locals.homeClass = 'current'
    res.render('homepage')
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), (req, res) => {

})