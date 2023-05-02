# my-frst-api

My first api ever made with the 100Devs alumni...
For practice we simply made a tea api.

Setup a server that listens.
Listens for get requests using tea names and return json data from our api. 

- Import two dependencies, 'express' and 'cors'
- Create an instance of the express application and assign it to a variable 'app'
- Declare a constant variable 'PORT' to store the port number from environment variable or use the default port 8000
- Use the 'cors' middleware with the app
- Create an object 'tea' with different types of tea and their respective properties
- Set up a route for the root path and send a HTML file as response
- Set up another route with '/api/:name' where ':name' is a parameter to extract the actual tea name from the URL and sends a JSON response for the tea -name, otherwise sends a 404 error message
- Start the server to listen on the specified port and logs a message indicating the server is running on the port.

