const express = require('express');

//Init App
const app = express();


//Home Route
app.get('/',function(req, res){
  res.send('Hello World');
});

//Start Server
app.listen(3000, function(){
  console.log('Server Started on port 3000...')
});
