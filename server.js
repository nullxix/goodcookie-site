const express = require('express')
const app = express()
const mustache = require('mustache-express')
require('dotenv').config()
const {PORT, DOMAIN, COOKIE_KEY, COOKIE_VALUE} = process.env


app.engine('html', mustache());
 
app.set('view engine', 'html');
app.set('views', __dirname + '/mustache-views');

app.use(express.static(__dirname + '/www'))
app.get('/', (req, res, next) => {
    const queries = JSON.stringify(req.query)
    res.render('index', 
        {
            'queries': queries, 
            'domain': DOMAIN,
            'cookieKey': COOKIE_KEY,
            'cookieValue': COOKIE_VALUE,
            'acceptMessage':'OUR-GOOD-USER-HAS-ACCEPTED-ALL-COOKIES-ON-ALL-WEBSITES'
        })
})
app.get('/developers', require('./routes/developers.js'))

app.listen(PORT, () => console.log(`Arr be listenin' on good ole' port ${PORT}`))