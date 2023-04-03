import axios from 'axios'

export const getSubCategories = (category) => {
    return axios
    .get(`http://localhost:5000/expense_categories/${category}`
    )
    .then(({data}) => {
    console.log(data.data.subcategories);
    })
}