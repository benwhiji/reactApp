import React, { useState, useEffect } from 'react';
import { fetchResultsData } from '../services/api';
import '../assets/styles/Results.css'; 

const Results = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchResultsData();
        setSchedule(data);
      } catch (error) {
        console.error('Error fetching results data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="matches-container">
      <h1>Results</h1>
      <ul className="match-list">
        {schedule.map((result, index) => (
          <li key={index} className={`match-item ${index === 0 ? 'home-match' : 'away-match'}`}>
            <div className="match-info">
              <div className="match-date-time">
                <span className="match-date">{result.date}</span> | <span className="match-time">Full Time</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <img src={result.cha_url} alt="Logo" className="team-logo" />
                  <span className="team-name">{result.Challenger}</span>
                </div>
                <span className="vs">{result.score}</span>
                <div className="team">
                  <img src={result.opp_url} alt={result.opp_url} className="team-logo" />
                  <span className="team-name">{result.opponent}</span>
                </div>
              </div>
              <div className="match-venue">
                Venue: {result.venue} {index === 0 ? '(Home)' : '(Away)'}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
