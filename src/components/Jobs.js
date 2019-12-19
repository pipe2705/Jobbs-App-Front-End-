import React, { Component } from "react";
import Job from "./Job";

class Jobs extends Component {
  render() {
    return this.props.jobs.map(job => {
      return <Job key={job._id} job={job} />;
    });
  }
}
export default Jobs;

//   render() {
//     return this.props.jobs.map(jobs => <JobItem key={jobs.id} jobs={jobs} />);
//   }
// }
