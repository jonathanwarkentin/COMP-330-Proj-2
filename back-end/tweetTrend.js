require('dotenv').load();
var Twit = require('twit');
var T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET

});
var params = {
    id: '2379574'
    // count: 3
}

T.get('trends/place', params, function (err, data, response) {
    // console.log(data[0]);
    // data[0].forEach(function(info)){
    //     console.log("topic: " + info.name);
    // }
    // for each(var item in data[0]){
    //     console.log(item.name);
    // }
    // data[0].trends.forEach(function(tweet){
    // console.log("tweet:" + tweet.name)
    // })
    // data[0].forEach(function(tweet){
    //     console.log(tweet.name);
    // })
    console.log(JSON.stringify(data, undefined, 2))
    //Try with twitter package instead of twit
})
