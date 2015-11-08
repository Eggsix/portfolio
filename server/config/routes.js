module.exports = function (app) {
	app.post('/new_user', function (req, res) { console.log(req) })
}