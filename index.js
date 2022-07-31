const express = require ('express')

const app = express ()

const port = 5000

// Basic Routing

// app.METHOD(PATH,HANDLER)

app.get('/', function(request,response){
    response.send('hello world!')
})

app.listen(port, () => {
    console.log(`Personal Web App Listening On Port ${port}`)
})

// http://localhost:5000/