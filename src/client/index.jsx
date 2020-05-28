import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';
import User from 'user';

// const tweet = tweets;

class TweetList extends React.Component {
  render() {
    let tweetElements = tweets.map((tweet, index) => {
      return <p>{tweet.text}</p>

    });

    return (
      <div>
        {tweetElements}
      </div>
    );
  }
}

const element = document.getElementById('app');


ReactDOM.render(<TweetList tweet={tweets} />, element);//

console.log("tweet react");
