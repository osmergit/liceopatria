import  express from "express"
import sumar  from "./funciones.js"
import cors from 'cors';
import { router } from "./routes/routes.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/usuarios',router);

 

app.listen(8000, ()=> {
    console.log('Servidor 🚀🚀Corriendo en  http://localhost:8000/')
})

var nombre = "Sandra Rios"
console.log(nombre)
console.log(sumar(10,20))