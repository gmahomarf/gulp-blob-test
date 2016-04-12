var gs = require('glob-stream');

var stream = gs.create('build/*/');

stream.on('data', function(file) {
    console.log(file);
});