(function() {
    var http = require('http'),
        express = require('express'),
        router = require('./lib/router'),
//        db = require('./lib/db'),
//        models = db( {} ),  // pass an empty object to db and get mongoose Models passed back as properties of the object
        app = express(),
        port = process.env.PORT || 3000;

    // the server is created here
    http.createServer(app).listen(port);
    console.log("node server running on port %s.", port);

    // set up routing
    router(app);


})();

