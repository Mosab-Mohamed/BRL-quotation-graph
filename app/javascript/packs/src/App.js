import React from "react";
import Routes from "./components/routes/Routes";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Routes />;
  }
}

export default App;
