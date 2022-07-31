//Install express server
let express = require('express');


let app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname+'/dist/angularapp'));

app.get('/*', (req, resp) =>{
    resp.sendFile(__dirname+'/dist/angularapp/index.html');

});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081);