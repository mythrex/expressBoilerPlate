const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.use('/',express.static(__dirname + '/public'));

// app.get('path', (req, res) => {
//
// });

app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
