console.log('eumessibot is running');

const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

console.log('eumessibot will tweet "no"');
client.post('statuses/update', {
    status: 'no'
})
    .then((tweet) => console.log('success!'))
    .catch((err) => console.log('error'));