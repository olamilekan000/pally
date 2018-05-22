const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));

routes(app);

const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
	console.log('now listening to ' + PORT)
});