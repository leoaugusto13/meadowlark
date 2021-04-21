const handlers = require('./lib/handlers')

app.get('/', handlers.home)

app.get('/about', handlers.about)

/* página 404 personalizada */ 
app.use(handlers.notFound)

/* página 500 personalizada */ 
app.use(handlers.serverError)