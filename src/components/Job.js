import React, { Component } from "react";
import JobForm from "./JobForm";
// import { thisTypeAnnotation } from "@babel/types";

class Job extends Component {
  state = {
    formStyle: {
      display: "none"
    }
  };

  toggleBodyForm = () => {
    this.state.formStyle.display === "block"
      ? this.setState({ formStyle: { display: "none" } })
      : this.setState({ formStyle: { display: "block" } });
  };

  deleteClickedJob = () => {
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
        <li data-jobs-index={this.props.job._id}>
          <span className="job-item">{this.props.job.city_location}</span>
        </li>
        <li data-jobs-index={this.props.job._id}>
          <span className="salary">${this.props.job.salary} </span>
        </li>
        <li>
          <button className="EditButton" onClick={this.toggleBodyForm}>
            Edit
          </button>
          <button className="remove" onClick={this.deleteClickedJob}>
            {" "}
            Remove
          </button>
        </li>
        <li>
          <JobForm
            job={this.props.job}
            style={this.state.formStyle}
            autoFocus={true}
            buttonName="Update Job!"
            updateJob={this.props.updateJob}
            toggleBodyForm={this.toggleBodyForm}
          />
        </li>
      </ul>
    );
  }
}

export default Job;
