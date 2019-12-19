import React, { Component } from "react";
import JobModel from "../models/JobModel";
import Jobs from "../components/Jobs";

class JobsContainer extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    JobModel.all().then(res => {
      console.log(res);
      this.setState({
        jobs: res
      });
    });
  };

  render() {
    return (
      <div className="jobsContainer">
        <Jobs jobs={this.state.jobs} />
      </div>
    );
  }
}

export default JobsContainer;
