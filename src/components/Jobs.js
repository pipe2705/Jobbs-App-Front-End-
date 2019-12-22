import React, { Component } from "react";
import Job from "./Job";

const Jobs = props => {
  let jobs = props.jobs.map(job => {
    return (
      <Job
        key={job._id}
        job={job}
        deleteJob={props.deleteJob}
        updateJob={props.updateJob}
      />
    );
  });

  return <ul>{jobs}</ul>;
};

export default Jobs;
