module.exports = (app) => {

	app.get('/introPSA', (req, res) => {
		res.render('PSA/introPSA');
	})
	
}