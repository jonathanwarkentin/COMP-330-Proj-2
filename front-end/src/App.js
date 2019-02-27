import React from "react";
import Titles from "./components/Titles";
import Topic from "./components/Topic";
import TopicInfo from "./components/TopicInfo";

class App extends React.Component {
  //SERVER TO-DO: retreive topics from server here and put in map called "topics" along with listPositions
  state = {
    selectedTopic: 1
  };

  topicInfo = {
    name: undefined,
    sentiment: undefined,
    highlightedTweetId: undefined,
    graph: undefined,
    miscInfo1: undefined,
    miscInfo2: undefined,
    miscInfo3: undefined
  };

  selectTopic = listPosition => {
    this.setState({
      selectedTopic: listPosition
    });
  };

  handleTopicInfo = data => {
    this.topicInfo.name = data.name;
    this.topicInfo.sentiment = data.sentiment;
    this.topicInfo.highlightedTweetId = data.highlightedTweetId;
    this.topicInfo.graph = data.graph;
    this.topicInfo.miscInfo1 = data.miscInfo1;
    this.topicInfo.miscInfo2 = data.miscInfo2;
    this.topicInfo.miscInfo3 = data.miscInfo3;
  };

  render() {
    return (
      <div id="full-wrapper">
        <div id="sub-wrapper">
          <Titles />
          <div id="topics-display-container">
            <div id="topic-list-container">
              <ol id="topic-list">
                <li
                  onClick={() => {
                    this.selectTopic(1);
                  }}
                >
                  <Topic
                    id="top-list-item"
                    name="topic1"
                    listPosition={1}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(2);
                  }}
                >
                  <Topic
                    name="topic2"
                    listPosition={2}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(3);
                  }}
                >
                  <Topic
                    name="topic3"
                    listPosition={3}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(4);
                  }}
                >
                  <Topic
                    name="topic4"
                    listPosition={4}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(5);
                  }}
                >
                  <Topic
                    name="topic5"
                    listPosition={5}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(6);
                  }}
                >
                  <Topic
                    name="topic6"
                    listPosition={6}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(7);
                  }}
                >
                  <Topic
                    name="topic7"
                    listPosition={7}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(8);
                  }}
                >
                  <Topic
                    name="topic8"
                    listPosition={8}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(9);
                  }}
                >
                  <Topic
                    name="topic9"
                    listPosition={9}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(10);
                  }}
                >
                  <Topic
                    id="bottom-list-item"
                    name="topic10"
                    listPosition={10}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>
              </ol>
            </div>
            <TopicInfo info={this.topicInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
