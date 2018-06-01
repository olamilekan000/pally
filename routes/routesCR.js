module.exports =  (app) => {
	app.get('/introCR', (req, res) => {
		res.render('CR/introCR');
		res.end();
	})	
}