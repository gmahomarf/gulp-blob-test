var glob = require('glob');

glob('build/*/', function(err, files) {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(files);
});