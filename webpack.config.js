const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        library: 'standupperMeet',
        path: path.resolve(__dirname, './dist/standupper-meet')
    }
}