import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import JobsContainer from "./containers/JobsContainer";
import "./app.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={JobsContainer} />
      </Switch>
    </div>
  );
}

// class App extends Component {
//   state = {
//     jobs: [
//       {
//         position: "Product Manager",
//         company: "General Assembly",
//         salary: 20000
//       }
//     ]
//   };

//   render() {
//     console.log(this.state.jobs);
//     return (
//       <div className="App">
//         <Jobs jobs={this.state.jobs} />
//       </div>
//     );
//   }
// }

export default App;
