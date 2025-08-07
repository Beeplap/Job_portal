import React from "react";

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Job Portal</h1>
        <p>Find your dream job or the perfect candidate!</p>
        <input
          type="text"
          placeholder="Search for jobs, companies, or skills..."
          className="search-bar"
        />
      </header>
      <section>
        <h2>Featured Jobs</h2>
        <ul>
          <li>Frontend Developer at TechCorp</li>
          <li>Backend Engineer at DataSoft</li>
          <li>UI/UX Designer at Creatives Inc.</li>
        </ul>
      </section>
      <section>
        <h2>Job Categories</h2>
        <div className="categories">
          <span>IT & Software</span>
          <span>Design</span>
          <span>Marketing</span>
          <span>Finance</span>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
