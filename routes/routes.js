
module.exports = (app) => {

	app.get('/', (req, res) => {
		res.render('screen');
	})

	app.get('/menu', (req, res) => {
		res.render('menu');
	})

}