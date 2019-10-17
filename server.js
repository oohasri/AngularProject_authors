const express = require('express');
      bodyParser = require('body-parser');
      app = express();
      path = require('path');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js') (app)

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
});

app.listen(8000, () => console.log("Listening on port 8000"));