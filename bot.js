const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const tweetIt = (tweetText) => {
    console.log(`eumessibot will tweet "${tweetText}"`);
    client.post('statuses/update', {
        status: tweetText
    })
    .then((tweet) => console.log('Success!'))
    .catch((err) => console.log('Error', err));
};

// const listen = () => {
//     client.stream('statuses/filter', { track: '@eumessibot' }, function (stream) {
//         stream.on('data', function (tweet) {
//             // console.log(tweet);
    
//             const replyTo = tweet.in_reply_to_screen_name;
//             const replyToID = tweet.id;
//             const from = tweet.user.screen_name;
    
//             if (replyTo === 'eumessibot') {
//                 const newTweet = `@${from} no0000asdas00asd0`;
//                 client.post('statuses/update', {
//                     status: newTweet,
//                     in_reply_to_status_id: replyToID
//                 })
//                     .then((tweet) => console.log('success', tweet.text))
//                     .catch((err) => console.log('error', err));
//             }
    
    
//         });
    
//         stream.on('error', function (error) {
//             console.log(error);
//         });
//     });
// };

module.exports = {
    tweetIt
}