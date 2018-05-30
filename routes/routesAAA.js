module.exports = (app) => {
	app.get('/introAAA', (req, res) => {
		res.render('AAA/introAAA');
		res.end();
	})
}