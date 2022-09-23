import "./styles.css";
import React from "react";
import Clock from "./Clock";
import RandRoll from "./../src/components/RandRoll";
import UserName from "./../src/components/UserName";
import RecipeSearch from "./../src/components/RecipeSearch";

export default class App extends React.Component {
  state = {
    pages: [<RecipeSearch />, <Clock />, <RandRoll />, <UserName />],
    curPage: 0,
  };
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <div>
          <button
            onClick={() => {
              this.swapProject(1);
            }}
          >
            Clock
          </button>
          <button
            onClick={() => {
              this.swapProject(0);
            }}
          >
            Recipe Search
          </button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }
  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex });
  }
}

// export default function App() {
//   let tired = 11;
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <p>I am level {tired} tired</p>
//     </div>
//   );
// }
