import "./App.css";
import JobCard from "./jobCard";
import jobs from "./jobs";

const jobCards = jobs.map((job, i) => {
  return <JobCard job={job} key={i} /> 
})

function App() {
  return (
    <div className="container">
      <h1>Job Application Tracker</h1>
      {/* <JobCard job={jobs[0]} /> */}
      {jobCards}
    </div>
  );
}

export default App;