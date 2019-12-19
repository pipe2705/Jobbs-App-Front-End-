const endPoint = `http://localhost:3000/api/Jobs`;

class JobModel {
  static all = () => {
    return fetch(endPoint)
      .then(response => response.json())
      .catch(err => console.log("Could not get all Jobs\n", err));
  };
}

export default JobModel;
