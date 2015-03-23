(function(module) {

    var path = require('path'),
        __views = path.join(__dirname + '/../public/views');



    module.exports = function(app) {
//        console.log("__dirname inside router: %s", __dirname);
//        console.log("__views inside router: %s", __views);

        app.get([ '/' , '/home' ], function(req, res) {
            res.sendFile( path.join(__views + '/index.html') );

        });

        app.get('*', function(req, res) {
            res.sendFile( path.join(__views + '/error.html') );
        });

    }



})(module);


