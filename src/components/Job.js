import React, { Component } from "react";
// import { thisTypeAnnotation } from "@babel/types";

class Job extends Component {
  deleteClickedJob = () => {
    // console.log("this.props", this.props);
    this.props.deleteJob(this.props.job);
  };

  render() {
    return (
      <ul>
        <li data-jobs-index={this.props.job._id}>
          <span className="job-item">
            {this.props.job.position} - {this.props.job.company}
          </span>
        </li>
        <li>
          <button className="remove" onClick={this.deleteClickedJob}>
            {" "}
            Remove
          </button>
        </li>
      </ul>
    );
  }
}

export default Job;
