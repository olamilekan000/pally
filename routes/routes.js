
module.exports = (app) => {

	app.get('/', (req, res) => {
		res.render('screen');
	})

	app.get('/menu', (req, res) => {
		res.render('menu');
		res.end();
	})

	app.get('/subjects', (req, res) => {
		res.render('subjects');
		res.end();
	})

}