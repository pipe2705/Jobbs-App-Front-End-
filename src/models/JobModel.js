const endPoint = `http://localhost:3000/api/Jobs`;

class JobModel {
  static all = () => {
    return fetch(endPoint)
      .then(response => response.json())
      .catch(err => console.log("Could not get all Jobs\n", err));
  };

  static createJob = job => {
    return fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(job)
    })
      .then(response => response.json())
      .catch(err => console.log("Could not Post a Job\n", err));
  };
}

export default JobModel;
