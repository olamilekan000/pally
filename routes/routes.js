
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

	app.get('/select', (req, res) => {
		res.render('select');
		res.end();
	})

	app.get('/introCR', (req, res) => {
		res.render('CR/introCR');
		res.end();
	})


	app.get('/introPSA', (req, res) => {
		res.render('PSA/introPSA');
	})

	app.get('/introAAA', (req, res) => {
		res.render('AAA/introAAA');
		res.end();
	})

	app.get('/introSFM', (req, res) => {
		res.render('SFM/introSFM');
		res.end();
	})
}