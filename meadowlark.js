const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

const fortunes = [
    "Conquer your fears o they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don´t know.",
    "You will have a pleasant surprise.",
    "Whenerver possible, keep it simple.",
]

/* Configura o view engine Handlebars 
* Cria um view engine e configura o Express para usá-lo por padrão
*/
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

/* O middleware static produz os mesmos efeitos da criação de uma rota para cada arquivo estático a ser distribuido de modo a
* renderizá-lo e retorná-lo para o cliente
*/
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

/* Adicionando as rotas com o método GET*/
app.get('/', (req, res) => 
    res.render('home')
)

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', { fortune: randomFortune })
})

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
