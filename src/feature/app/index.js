import React from "react";
import AppWindow from "./components/window";
import AppHeader from "./components/header";
class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppWindow />
      </div>
    );
  }
}

export default App;
