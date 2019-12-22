import React, { Component } from "react";

class JobForm extends Component {
  state = {
    position: this.props.job.position,
    company: this.props.job.company,
    salary: this.props.job.salary,
    city_location: this.props.job.city_location
    // country_location: this.props.job.country_location
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const job = this.state;
    job.rowid = this.props.job.rowid;
    this.props.updateJob(job);
    this.props.toggleBodyForm();
  };

  render() {
    return (
      <div style={this.props.style} className="jobForm">
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus={this.props.autoFocus}
            onChange={this.onChange}
            placeholder="Enter edit here..."
            type="text"
            name="position"
            value={this.state.position}
          />
          <input
            autoFocus={this.props.autoFocus}
            onChange={this.onChange}
            placeholder="Enter edit here..."
            type="text"
            name="company"
            value={this.state.company}
          />
          <input
            autoFocus={this.props.autoFocus}
            onChange={this.onChange}
            placeholder="$$$$"
            type="number"
            name="salary"
            value={this.state.salary}
          />
          <input
            autoFocus={this.props.autoFocus}
            onChange={this.onChange}
            placeholder="City Name"
            type="text"
            name="city_name"
            value={this.state.city_location}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default JobForm;
