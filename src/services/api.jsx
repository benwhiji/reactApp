import axios from 'axios';

export const fetchScheduleData = async () => {
  try {
    const response = await axios.get('https://main--inquisitive-stardust-f923d6.netlify.app/.netlify/functions/server/api/schedule');
    return response.data;
  } catch (error) {
    console.error('Error fetching schedule data:', error);
    throw error;
  }
};

export const fetchResultsData = async () => {
  try {
    const response = await axios.get('https://main--inquisitive-stardust-f923d6.netlify.app/.netlify/functions/server/api/results');
    return response.data;
  } catch (error) {
    console.error('Error fetching results data:', error);
    throw error;
  }
};

export const fetchPlayerData = async () => {
  try {
    const response = await axios.get('https://elaborate-dolphin-56b9bd.netlify.app/.netlify/functions/server/api/players');
    return response.data;
  } catch (error) {
    console.error('Error fetching player data:', error);
    throw error;
  }
};
