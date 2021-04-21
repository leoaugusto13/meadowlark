const handlers = require('../handlers')

test('home page renders', () => {
    const req = {}
    /* a função do jest.fn cria uma função de mocking
        genérica que registra como ela está sendo
        chamada
    */ 
    const res = { render: jest.fn() }
    handlers.home(req, res)
    expect(res.render.mock.calls[0][0].toBe('home'))
})

