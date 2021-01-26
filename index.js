import { botScreenName, replyMentions, searchTweets, tweetIt, uploadMedia } from './bot.js';
import express from 'express';

const app = express();

const port = process.env.PORT | 3000;

app.listen(port, () => {
    console.log(`${botScreenName} is running in port ${port}`);

    replyMentions();
});



//getTweet('1344070510276206594');

//searchTweets('Jaja esta foto solo la creen los kumpas!! Porque fue el ministro? cuando tendria que haberlo echo una enfermera o su medico??');

//tweetIt('asdfg');


//uploadMedia('./img/eumessi.jpg');