import express  from 'express'

const app = express()

const port = 3000

app.get('/',(req,res)=> {
    res.send({ msg: 'This is Gustavo!' })
})

app.listen(port)