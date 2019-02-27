import React from "react";

class Topic extends React.Component {
  getTopicInfo() {
    //SERVER TO-DO: retreive topic info from server here
    const topicInfo = {
      name: `${this.props.name}`,
      sentiment: "positive",
      highlightedTweetId: "1098019117574115329",
      graph: {
        xData: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24
        ],
        yData: [
          6500,
          6300,
          6250,
          6700,
          6500,
          6300,
          6300,
          6250,
          6700,
          6500,
          6300,
          6250,
          6500,
          6300,
          6250,
          6700,
          6500,
          6300,
          6300,
          6250,
          6700,
          6500,
          6300,
          6250
        ]
      },
      miscInfo1: "miscInfo1 for Topic" + `${this.props.listPosition}`,
      miscInfo2: "miscInfo2 for Topic" + `${this.props.listPosition}`,
      miscInfo3: "miscInfo3 for Topic" + `${this.props.listPosition}`
    };
    return topicInfo;
  }

  render() {
    if (this.props.listPosition === this.props.selectedTopic) {
      this.props.setTopicInfo(this.getTopicInfo());
      return (
        <div className="highlighted  individual-topic">
          <span>#{this.props.name}</span>
          <span className={"sentiment " + this.getTopicInfo().sentiment}>
            {this.getTopicInfo().sentiment}
          </span>
        </div>
      );
    } else {
      return (
        <div className="individual-topic">
          <span>#{this.props.name}</span>
          <span className={"sentiment " + this.getTopicInfo().sentiment}>
            {this.getTopicInfo().sentiment}
          </span>
        </div>
      );
    }
  }
}

export default Topic;
