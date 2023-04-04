import axios from 'axios'

export const addTransaction = (details) => {
    return axios
    .post(
        `http://localhost:5000/users/0/transactions`, expense 
    )
    .then(data => {
        console.log(data)
    })
}
