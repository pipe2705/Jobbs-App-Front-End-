import React, { Component } from "react";

class CreateJobForm extends Component {
  state = {
    position: "",
    company: "",
    city_location: "",
    salary: null
  };

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    let job = this.state;
    this.props.createJob(job);
    this.setState({
      position: "",
      company: "",
      city_location: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="jobForm">
          <input
            onChange={this.onInputChange}
            type="text"
            name="position"
            id="newJobTitle"
            placeholder="Add a position here.."
            value={this.state.position}
          />
          <input
            onChange={this.onInputChange}
            type="text"
            name="company"
            id="newJobCompany"
            placeholder="Add a company here.."
            value={this.state.company}
          />
          <input
            onChange={this.onInputChange}
            type="text"
            name="city_location"
            id="newJobCity"
            placeholder="Add a city here "
            value={this.state.city_location}
          />
          <input
            onChange={this.onInputChange}
            type="number"
            name="salary"
            id="newJobSalary"
            placeholder="Salary in Dollars  "
            value={this.state.salary}
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
