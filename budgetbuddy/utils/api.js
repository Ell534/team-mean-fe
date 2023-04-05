import axios from 'axios';
import { ip } from '../.ip';

export const checkIfRegistered = (uid) => {
  return axios.get(`http://${ip}:5000/users/${uid}`).then(({ data }) => {
    console.log(data.data, 'api line 5');
    return data.data;
  });
};

// const api = axios.create({ baseURL: "${ip}:5000" });
// // IGNORE;

export const getUserGoals = (user_id) => {
  return axios
    .get(`http://${ip}:5000/users/${user_id}/goals`)
    .then(({ data }) => {
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
    .post(`http://${ip}:5000/users`, {
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
  return axios.get(`http://${ip}:5000/users/${uid}/budget`).then(({ data }) => {
    console.log(data, 'api line 45');
    return data;
  });
};

export const postRegisteredBudget = (
  uid,
  { income_t_count, expense_t_count, balance, total_income, total_expenses }
) => {
  return axios
    .post(`http://${ip}:5000/users/${uid}/budget`, {
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

export const addTransaction = (
  type,
  amount,
  categoryId,
  description,
  currency_id,
  userId
) => {
  console.log(amount, categoryId, description, currency_id, userId);
  console.log(userId);
  return axios
    .post(`http://${ip}:5000/users/${userId}/transaction`, {
      userId,
      budgetId: userId,
      categoryId,
      type,
      description,
      amount,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      currency_id,
    })
    .then((data) => {
      return data;
    });
};
export const fetchbudgetData = (user_Id) => {
  return axios
    .get(`http://${ip}:5000/users/${user_Id}/budget`)
    .then((response) => {
      console.log(response);
      return response.data.budgetData;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addPersonalGoal = (
  userId,
  targetAmount,
  targetDate,
  deposit,
  depositFrequency,
  reason
) => {
  return axios
    .post(`http://${ip}:5000/users/${userId}/goal`, {
      user_id: userId,
      target_amount: parseInt(targetAmount),
      target_date: targetDate,
      deposit: parseInt(deposit),
      deposit_frequency: depositFrequency,
      reason,
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {});
};
