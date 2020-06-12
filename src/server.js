const express = require("express")
const server = express()


//Configurar a pasta publica
server.use(express.static("public"))


//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configurar caminhos da minha aplicação

//pagina inicial
server.get("/", (req, res) => {
    res.render("index.html")
})

server.get("/create-point", (req, res) => {
   return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
   return res.render("search-results.html")
})
//ligar o servidor
server.listen(3000)