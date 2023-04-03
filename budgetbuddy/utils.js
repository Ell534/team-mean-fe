import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000' });

const getUserGoals = (user_id) => {
  return api.get(`/users/${user_id}/goals`).then((data) => {
    console.log(data);
    return data;
  });
};

export { getUserGoals };
