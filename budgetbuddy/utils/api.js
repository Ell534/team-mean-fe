import axios from 'axios';
import { EllIP } from '../.IP.js';

export const checkIfRegistered = (uid) => {
  return axios.get(`${EllIP}/users/${uid}`).then(({ data }) => {
    console.log(data.data, 'api line 5');
    return data.data;
  });
};

// const api = axios.create({ baseURL: '${EllIP}' }); IGNORE

export const getUserGoals = (user_id) => {
  return axios.get(`${EllIP}/users/${user_id}/goals`).then(({ data }) => {
    const userGoals = data.data.userGoals;
    return userGoals;
  });
};

export const postRegisteredUser = ({ user, name, userName, currency }) => {
  console.log(user.email, 'email');
  console.log(user.uid, 'uid');
  console.log(user, 'user');
  console.log(name, 'name');
  console.log(userName, 'userName');
  console.log(currency, 'currency');

  console.log(Object.keys(user));

  return axios
    .post(`${EllIP}/users`, {
      user_id: user.uid,
      budget_id: user.uid,
      name: name,
      user_name: userName,
      email: user.email,
      currency: currency,
    })
    .then((success) => {
      console.log(success);
    })
    .catch((error) => {
      if (error.response.status === 404) {
        alert(`request failed as username is not recognised`);
      } else {
        alert(`request failed`);
      }

      console.log(error);
    });
};

export const checkIfRegisteredBudget = (uid) => {
  return axios.get(`${EllIP}/users/${uid}/budget`).then(({ data }) => {
    console.log(data, 'api line 45');
    return data;
  });
};

export const postRegisteredBudget = (
  uid,
  { income_t_count, expense_t_count, balance, total_income, total_expenses }
) => {
  return axios
    .post(`${EllIP}/users/${uid}/budget`, {
      income_t_count,
      expense_t_count,
      balance,
      total_income,
      total_expenses,
    })
    .then((success) => {
      console.log(success);
    })
    .catch((error) => {
      if (error.response.status === 404) {
        alert(`request failed as username is not recognised`);
      } else {
        alert(`request failed`);
      }

      console.log(error);
    });
};
