const path = require('path');
const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

//Start Express
const app = express();
//const hbs = create({});
const PORT = process.env.PORT || 3001;


//Create an Express Session
const sess = {
    secret: process.env.DB_SESSION_SECRET,
    cookie: {
        maxAge: 30*24*60*60*1000,
        httpOnly: true,
        secure: false, 
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));
app.use(function (request, response, next){
    response.locals.session = request.session;
    next();
});

//Create a handlebars engine
//const hbs = expressHandlebars.create({helpers});
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Create express routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// sequelize.sync({alter: true});

//Start express, sync with sequelize database
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening on ' + PORT));
});