var express = require('express');
const app = require("https-localhost")("last-five.herokuapp.com")

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);

app.redirect()