const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

/* Configura o view engine Handlebars 
* Cria um view engine e configura o Express para usá-lo por padrão
*/
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

/* Adicionando as rotas com o método GET*/
app.get('/', (req, res) => 
    res.render('home')
)
a
app.get('/about', (req, res) =>
    res.render('about')
)

/* Página 404 personalizada */
/* Método use foi usado com o qual o Express adiciona o Middleware */
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

/* Página 500 personalizada */
app.use((err, req, res, next)=> {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, ()=> console.log(
    `Express started on http://localhost:${port}; `
    + `press Crtl-C to terminate.`))
