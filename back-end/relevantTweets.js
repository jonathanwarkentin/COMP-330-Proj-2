require('dotenv').load();
var Twit = require('twit');
var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET

});
T.get('search/tweets', { q: '#Eminem since:2018-12-01', count: 100 }, function(err, data, response) {
    data.statuses.forEach(function(tweet){
        console.log("tweet:" + tweet.text)
    })
    // console.log(data)
  })