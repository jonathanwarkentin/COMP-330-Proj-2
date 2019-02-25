import React from "react";
import Graph from "./Graph";
import HighlightedTweet from "./HighlightedTweet";
import MiscInfo from "./MiscInfo";

class TopicInfo extends React.Component {
  render() {
    return (
      <div id="topic-info-container">
        <HighlightedTweet id={this.props.info.highlightedTweetId} />
        <Graph
          xData={this.props.info.graph.xData}
          yData={this.props.info.graph.yData}
        />
        <MiscInfo
          miscInfo1={this.props.info.miscInfo1}
          miscInfo2={this.props.info.miscInfo2}
          miscInfo3={this.props.info.miscInfo3}
        />
      </div>
    );
  }
}

export default TopicInfo;
