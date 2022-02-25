import { useEffect, useState } from 'react';
import './App.css';
import JobList from './components/JobList';
import jobsData from './data.json';

function App() {

  const [jobLists, setJobLists] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setJobLists(jobsData);
  }, []);

  const handleFeatures = feature => {
    if (features.indexOf(feature) === -1) {
      setFeatures([...features, feature]);
    }
  };

  const filteredJobs = jobLists.filter(({ level, role, languages, tools }) => {
    const jobItems = [level, role, ...languages, ...tools];
    if (features.length === 0) {
      return true;
    }
    return jobItems.some(jobItem => features.includes(jobItem));
  });

  const handleRemoveJob = removedJob => {
    const remainingJobs = features.filter(feature => feature !== removedJob);
    setFeatures(remainingJobs);
  }

  return (
    <div className="app">
      <header className="header" />

      <div className="jobList">
        {
          features.length > 0 &&
          <div className="container selected-job d-flex">
            <ul className="d-flex">
              {
                features.map((feature, index) => <li
                  key={index}
                >{feature}
                  <span className="remove-jobBtn"
                    onClick={() => handleRemoveJob(feature)}
                  >&times;</span></li>)
              }
            </ul>
            <button className="remove-allBtn" onClick={() => setFeatures([])}>Clear</button>
          </div>
        }

        <div>
          {
            filteredJobs.map(job => <JobList
              key={job.id}
              job={job}
              handleFeatures={handleFeatures}
            />)
          }
        </div>
      </div>

    </div>
  );
}

export default App;
