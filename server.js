const app = require("https-localhost")()

app.serve('/build/index.html')

app.listen(process.env.PORT || 8080);

app.redirect()