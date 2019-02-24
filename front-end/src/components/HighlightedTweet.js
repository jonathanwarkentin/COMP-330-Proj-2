import React from "react";
import TweetEmbed from "react-tweet-embed";

const HighlightedTweet = props => (
  <div id="highlighted-tweet">
    <TweetEmbed id={props.id} />
  </div>
);

export default HighlightedTweet;
