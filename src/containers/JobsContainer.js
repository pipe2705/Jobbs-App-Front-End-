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
    JobModel.createJob(job).then(res => {
      this.setState({ jobs: res });
    });
  };

  deleteJob = job => {
    JobModel.delete(job).then(res => {
      console.log("I LOVE YOU JAMES", res);
      //   let jobs = this.state.jobs.filter(job => {
      //     return job._id !== res._id;
      //   });
      //   this.setState({ jobs });
      // });
    });
  };

  render() {
    return (
      <div className="jobsComponent">
        <CreateJobForm createJob={this.createJob} />

        <Jobs jobs={this.state.jobs} deleteJob={this.deleteJob} />
      </div>
    );
  }
}

export default JobsContainer;
