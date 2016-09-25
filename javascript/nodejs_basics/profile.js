// Problem: Need simple way to look at a user's badge count and JS points

const https = require('https')

function printMessage(username, badgeCount, points) {
  return `${username} has ${badgeCount} total badge(s) and ${points} in JavaScript`
}

function printError(error) {
  console.log(error.message)
}

const username = 'andrewcousineau123'
const request = https.get(`https://teamtreehouse.com/${username}.json`, function(response) {
  let body = ''
  response.on('data', function(chunk) {
    body += chunk
  })
  response.on('end', function() {
    try {
      const profile = JSON.parse(body)
    } catch(error) {
      printError(error)
    }
    console.log(printMessage(username, profile.badges.length, profile.points.JavaScript))
  })
})

request.on('error', printError)
