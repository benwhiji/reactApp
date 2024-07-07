import React, { useState, useEffect } from 'react';
import { fetchPlayerData } from '../services/api';
import '../assets/styles/players.css'; // Import your CSS file

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlayerData();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchData();
  }, []);

  const selectPlayer = (playerId) => {
    setSelectedPlayerId(playerId);
  };

  const resetSelectedPlayer = () => {
    setSelectedPlayerId(null);
  };

  const selectedPlayer = players.find(player => player.id === selectedPlayerId);

  return (
    <div>
      <div className="Heading">
        <h1>Players Information</h1>
      </div>
      <div className="players-grid">
        {players.map(player => (
          <div key={player.id} className="player-card" onClick={() => selectPlayer(player.id)}>
            <h2>{player.name}</h2>
            <img src={player.google_image_url} alt={player.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <p><strong>Position:</strong> {player.position}</p>
            <p><strong>Age:</strong> {player.age}</p>
            <p><strong>Start Date:</strong> {player.start_date}</p>
            <p><strong>Rank:</strong> {player.rank}</p>
          </div>
        ))}
      </div>
      {selectedPlayer && (
        <div className="player-details">
          <button onClick={resetSelectedPlayer}>Back to Players</button>
          <h2>{selectedPlayer.name}</h2>
          <p><strong>Position:</strong> {selectedPlayer.position}</p>
          <p><strong>Age:</strong> {selectedPlayer.age}</p>
          <p><strong>Start Date:</strong> {selectedPlayer.start_date}</p>
          <p><strong>Rank:</strong> {selectedPlayer.rank}</p>
          <img src={selectedPlayer.google_image_url} alt={selectedPlayer.name} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}

export default Players;
