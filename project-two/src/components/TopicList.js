import React from "react";
import Topic from "./Topic";

class TopicList extends React.Component {
  render() {
    return (
      <div>
        <p>open TopicList</p>
        <div>
          <Topic />
          <Topic />
          <Topic />
        </div>
        <p>close TopicList</p>
      </div>
    );
  }
}

export default TopicList;
