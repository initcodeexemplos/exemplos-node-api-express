const express = require('express')
const { somar, sub } = require('./exercicios')

const app = express()
const porta = 3000
app.use(express.json())

app.post('/somar', (req, res) => {
    const { num1, num2 } = req.body
    const result = somar(num1, num2)

    res.status(200).send({ result })
})

app.post('/sub', (req, res) => {
    const { num1, num2 } = req.body
    const result = sub(num1, num2)

    res.status(200).send({ result })
})


app.listen(porta, () => {
    console.log('servidor rodando na porta ' + porta)
})