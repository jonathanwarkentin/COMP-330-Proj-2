import React from "react";
import TrendSelectors from "./TrendSelectors";
import TopicList from "./TopicList";
import { Button, Icon, } from 'react-materialize'

class TrendsDisplay extends React.Component {
  render() {
    return (
      <div>
        <Button waves='light'>Open TrendsDisplay<Icon left>save</Icon></Button>
        <TrendSelectors />
        <TopicList />
        <Button waves='light'>Close TrendsDisplay<Icon left>save</Icon></Button>
      </div>
    );
  }
}

export default TrendsDisplay;
