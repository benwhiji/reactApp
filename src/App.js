import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Players from './components/Players';
import Results from './components/Results';
import Matches from './components/Matches';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// Configure NProgress to remove the circular indicator
nprogress.configure({ showSpinner: false });

function App() {
  //const location = useLocation();

  // useEffect(() => {
  //   const delayTimeout = setTimeout(() => {
  //     nprogress.start(); // Start progress bar after 2 seconds delay
  //   }, 2000);

  //   return () => {
  //     clearTimeout(delayTimeout);
  //     nprogress.done(); // Stop progress bar on component unmount or route change
  //   };
  // }, [location]);

  return (
    <>
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="https://tmssl.akamaized.net/images/wappen/head/568.png?lm=1404764408" alt="Logo" width="10%" height="10%" className="d-inline-block align-top" />
            KAIZER CHIEFS ASSESSMENT
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/matches"><i className="fa fa-calendar"></i> Matches</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/results"><i className="fa fa-trophy"></i> Results</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/players"><i className="fa fa-user"></i> Players</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="container mt-4">
        <Routes>
          <Route path="/matches" element={<Matches />} />
          <Route path="/results" element={<Results />} />
          <Route path="/players" element={<Players />} />
        </Routes>
      </div>
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
