const express = require('express')
// This allows us to fire off express and have all it's dependencies ready and captures this in a variable
const app = express(); 
const PORT = 8000;

const tea = {
    'green': {
        'type': 'green',
        'origin': 'China',
        'waterTemp': 200,
        'steepTimeInSeconds': 180,
        'caffinated': true,
        'flavor': "matcha"
    },
    'ginger': {
        'type': 'herbal',
        'origin': 'Jamaica',
        'waterTemp': 150,
        'steepTimeInSeconds': 220,
        'caffinated': false,
        'flavor': "spicy"
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'Cunknown',
        'waterTemp': 0,
        'steepTimeInSeconds': 0,
        'caffinated': 'unknown',
        'flavor': 'unknown',
    },

}

app.get('/', (request, response) => {
    // Wherever server starts is where it will look for the index.html file
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if( tea[teaName] ) {
        response.json(tea[teaName])
    }else {
        response.json(tea['unknown'])
    }
    response.json(tea[teaName])
})

// Server listens for PORT. Instead of hard coding it we leave it open. 
// We check if Heroku is serving up the port and if not we use our own port. 
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Better go catch it!`)
})