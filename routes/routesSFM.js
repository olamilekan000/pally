module.exports = (app) => {
	app.get('/introSFM', (req, res) => {
		res.render('SFM/introSFM');
		res.end();
	})
}