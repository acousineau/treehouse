var profile = require('./profile');

//var users = ['andrewcousineau', 'chalkers', 'joykesten2', 'davemcfarland'];

var users = process.argv.slice(2);

users.forEach(profile.get);
