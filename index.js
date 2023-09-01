import  express from "express"
import sumar  from "./funciones.js"
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Ejemplo de mi servidor de pagina Web')
  })
  app.get('/inicio', (req, res) => {
    res.send('Esta es mi pagina de inicio')
  })
  app.get('/correo', (req, res) => {
    res.send('Esta es mi pagina de correo')
  })

app.listen(4000, ()=> {
    console.log('Servidor Corriendo en  http://localhost:4000/')
})

var nombre = "Sandra Rios"
console.log(nombre)
console.log(sumar(10,20))