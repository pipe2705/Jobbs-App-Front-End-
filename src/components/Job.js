import React, { Component } from "react";

class Job extends Component {
  render() {
    return (
      <li data-jobs-index={this.props.job._id}>
        <span className="job-item">{this.props.job.position}</span>
      </li>
    );
  }
}

export default Job;
