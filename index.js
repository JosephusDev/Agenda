import express from "express"
import cors from "cors"
import contatosRoutes from "./routes/contatos.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/", contatosRoutes)

app.listen(8800)
console.log("Servidor rodando em http://localhost:8800/")