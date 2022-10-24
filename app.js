

const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Contant-Type', 'text/plain')

    res.end('Opa, teste!!')

})

server.listen(port, () => {
    console.log('Opa, servidor web iniciado!')
})