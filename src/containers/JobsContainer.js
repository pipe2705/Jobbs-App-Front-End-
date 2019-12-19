import React, { Component } from "react";
import CreateJobForm from "../components/CreateJobForm";
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

  createJob = job => {
    let newJob = {
      position: job,
      company: ""
    };
    JobModel.createJob(newJob).then(res => {
      let jobs = this.state.jobs;
      jobs.push(res);
      this.setState({ jobs: jobs });
    });
  };

  render() {
    return (
      <div className="jobsComponent">
        <CreateJobForm createJob={this.createJob} />

        <Jobs jobs={this.state.jobs} />
      </div>
    );
  }
}

export default JobsContainer;
