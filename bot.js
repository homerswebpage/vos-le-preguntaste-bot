const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const botScreenName = process.env.BOT_SCREEN_NAME;

const tweetIt = (tweetText) => {
    console.log(`${botScreenName} will tweet "${tweetText}"`);
    client.post('statuses/update', {
        status: tweetText
    })
    .then((tweet) => console.log('Success!'))
    .catch((err) => console.log('Error', err));
};

const replyTweet = (replyText, from, tweetId) => {
    console.log(`${botScreenName} will reply the tweet ${tweetId} from ${from}`);

    client.post('statuses/update', {
        status: `@${from} ${replyText}`,
        in_reply_to_status_id: tweetId
    })
    .then((tweet) => console.log('Success!'))
    .catch((err) => console.log('Error', err));
};

const replyMentions = () => {
    const botScreenName = process.env.BOT_SCREEN_NAME;
    console.log(`${botScreenName} is waiting for mentions...`);

    client.stream('statuses/filter', { track: `@${botScreenName}` }, function (stream) {

        stream.on('data', function (tweet) {

            const tweetId = tweet.id_str;
            const from = tweet.user.screen_name;
            const text = tweet.text;
            const replyTo = tweet.in_reply_to_screen_name; // persona arrobada en el tweet inicial, en este caso el @ del bot
            
            console.log(`[ID: ${tweetId}] ${from} (replying to ${replyTo}) twitted: ${text}`);

            if (replyTo === botScreenName) {
                replyTweet('mmm no, la verdad que no maquina', from, tweetId);
            }    
    
        });
    
        stream.on('error', function (error) {
            console.log('Stream error', error);
        });
    });
};

module.exports = {
    tweetIt,
    replyTweet,
    replyMentions
}