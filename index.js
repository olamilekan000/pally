const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const routesAAA = require('./routes/routesAAA');
const routesCR = require('./routes/routesCR');
const routesSFM = require('./routes/routesSFM');
const routeADVTAX = require('./routes/routesADVTAX');

const app = express();

//set viw engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//serve public files
app.use('/public', express.static(path.join(__dirname, 'public')));

//routes fopr each courses
routes(app);
routesAAA(app);
routesCR(app);
routesSFM(app);
routeADVTAX(app);

const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
	console.log('now listening to ' + PORT)
});