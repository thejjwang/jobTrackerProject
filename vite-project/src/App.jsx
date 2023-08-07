import "./App.css";
import JobCard from "./jobCard";
import jobs from "./jobs";

const jobCards = jobs.map((job, i) => {
  return <JobCard job={job} key={i} />;
});

function App() {
  return (
    // in src/App.jsx fadsf
    <div className="mx-auto max-w-4xl">
      <h1>Job Application Tracker</h1>
      {jobCards}
    </div>
  );
}

export default App;

  