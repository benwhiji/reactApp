import React, { useState, useEffect } from 'react';
import { fetchScheduleData } from '../services/api.jsx';
import '../assets/styles/matches.css'; 

const Matches = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchScheduleData();
        setSchedule(data);
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="matches-container">
      <h1>Match Schedule</h1>
      <ul className="match-list">
        {schedule.map((match, index) => (
          <li key={index} className={`match-item ${index === 0 ? 'home-match' : 'away-match'}`}>
            <div className="match-info">
              <div className="match-date-time">
                <span className="match-date">{match.date}</span> | <span className="match-time">{match.time}</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <img src="https://tmssl.akamaized.net/images/wappen/head/568.png?lm=1404764408" alt="Logo" className="team-logo" />
                  <span className="team-name">Kaizer Chiefs</span>
                </div>
                <span className="vs">VS</span>
                <div className="team">
                  <img src={match.url} alt={match.opponent} className="team-logo" />
                  <span className="team-name">{match.opponent}</span>
                </div>
              </div>
              <div className="match-venue">
                Venue: {match.venue} {index === 0 ? '(Home)' : '(Away)'}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;
