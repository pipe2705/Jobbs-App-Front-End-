import React, { Component } from "react";

class CreateJobForm extends Component {
  state = {
    job: ""
  };

  onInputChange = event => {
    this.setState({
      job: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    let job = this.state.job;
    this.props.createJob(job);
    this.setState({
      job: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="jobForm">
          <input
            onChange={this.onInputChange}
            type="text"
            id="newItemDescription"
            placeholder="Add a Job here.."
            value={this.state.job}
          />
          <button type="submit" id="addJob" className="addJobButton">
            Add Job
          </button>
        </form>
      </div>
    );
  }
}

export default CreateJobForm;
