//bring in express
const express = require('express')

//instantiate express
const app = express();

const port= 3000

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get('/', (req,res) => {
    res.send('<h1> Home page,Route 1 </h1>')
})

app.get("/template2",(req,res) => {
    res.render('template2')
})  
    app.get("/template1",(req,res) => {
        res.render('template1')
})
app.get('/3', (req,res) => {
    res.send('<h1> Route 3</h1>')
})
app.get('/4', (req,res) => {
    res.send('<h1> Route 4</h1>')
})
app.get('/5', (req,res) => {
    res.send('<h1> Route 5</h1>')
})
app.get('/6', (req,res) => {
    res.send('<h1> Route 6</h1>')
})
app.get('/7', (req,res) => {
    res.send('<h1> Route 7</h1>')
})
app.get('/8', (req,res) => {
    res.send('<h1> Route 8</h1>')
})
app.get('/9', (req,res) => {
    res.send('<h1> Route 9</h1>')
})
app.get('/10', (req,res) => {
    res.send('<h1> Route 10</h1>')
})






//Tell app to listen to the port
app.listen(port,()=> {
    console.log(`listening on port, ${port}`)
})