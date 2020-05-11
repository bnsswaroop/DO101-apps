const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 3 of the app.' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(9090, function () {
  console.log('Server listening on port 9090...');
});
