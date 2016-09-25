// Problem: Need simple way to look at a user's badge count and JS points

// Solution: Use Node.js to connect to Treehouse's API to get profile information
// to print out
var http = require('http');

//Print out message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript.";
  console.log(message);
}

//Print out error
function printError(error) {
  console.error(error.message);
}

function get(username) {
  // Connect to the API URL: http://teamtreehouse.com/username.json
  var request = http.get('http://teamtreehouse.com/'+username+'.json', function(response) {
    var body = '';

    // Read data from response
    response.on('data', function(chunk){
      body += chunk;
    });

    response.on('end', function(){

      if (response.statusCode === 200) {
        try {
          // Parse the data
          var profile = JSON.parse(body);

          var badgeCount = profile.badges.length;
          var points = profile.points.JavaScript;

          // Print the data out
          printMessage(profile.name, badgeCount, points);
        }

        catch (error) {
          // Parse Error
          printError(error);
        }
      }

      else {
        //Status Code Error
        printError({message:  'There was an error getting the profile for ' +
                    username +
                    ". (" +
                    http.STATUS_CODES[response.statusCode] +
                    ")"
        });
      }
    });

  });

  // Connection Error
  request.on('error', printError);
}

module.exports.get = get;
