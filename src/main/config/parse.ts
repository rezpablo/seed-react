var Parse = require('parse');

Parse.initialize('DB');
Parse.serverURL = 'http://localhost:1337/parse';

export default Parse;