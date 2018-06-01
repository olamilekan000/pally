module.exports = (app) => {
	app.get('/introAdvtax', (req, res) => {
		res.render('ADVTAX/introAdvtax');
		res.end();
	})	
}