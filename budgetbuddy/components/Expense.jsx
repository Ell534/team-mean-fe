import { Button, SafeAreaView, TextInput, Text } from "react-native"
import { useState } from "react"
import { styles } from "../styles";
import DropDownPicker from 'react-native-dropdown-picker';
import { addTransaction } from "../utils/api";

const Expense = ({navigation, user}) => {
    const type = 'expense';
    const [message, setMessage] = useState(false)
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [currencyOpen, setCurrencyOpen] = useState(false)
    const [currencyValue, setCurrencyValue] = useState(null)
    const [categoryId, setCategory] = useState(0);
    const [description, onChangeDescription] = useState('');
    const [amount, onChangeAmount] = useState(0);
    const [currency_id, setCurrency] = useState(0)
    const [currencies, setCurrencies] = useState([
        {label: 'GBP', value: 1},
        {label: 'USD', value: 2},
        {label: 'EUR', value: 3}
    ])
    const [categories, setCategories] = useState([
        {label: 'Groceries', value: 4},
        {label: 'Restaurants', value: 5},
        {label: 'Entertainment', value: 8},
        {label: 'Studying', value: 10},
        {label: 'Petrol',value: 13},
        {label: 'Public Transport',value: 14},
        {label: 'Rent',value: 16},
        {label: 'Utilities',value: 17},
        {label: 'Holiday',value: 21},
        {label: 'Clothing',value: 22}
    ]);
    // const [expenseDetails, setExpenseDetails] = useState({
    //     userId: 0,
    //     budgetId: 0,
    //     categoryId: 0,
    //     type: 'expense',
    //     description: '',
    //     amount: 0,
    //     date: new Date(),
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //     currency_id: 0,
    // })

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     addExpense(expenseDetails)
    // }

    if (message) {
        return (<SafeAreaView style={styles.login}>
            <Text style={styles.text}>Your expense has been added!</Text>
            <Button onPress={() => {
                navigation.goBack()
            }} title='Dismiss'/>
        </SafeAreaView> )
    }

    return (
        <SafeAreaView>
            <TextInput 
            placeholder="Amount"
            placeholderTextColor='#e2b44e'
            onChangeText={onChangeAmount}
            text={amount}
            style={styles.placeholderText}
            />
            <TextInput 
            placeholder="description"
            placeholderTextColor='#e2b44e'
            onChangeText={onChangeDescription}
            text={description}
            style={styles.placeholderText}
            />
             <DropDownPicker
             containerProps={{
                height: open === true ? 220 : null,
              }}
            open={open}
            value={value}
            items={categories}
            setOpen={setOpen}
            setValue={setValue}
            setItem={setCategories}
            onChangeValue={(value) => {
                setCategory(value)
            }}
            />
            <DropDownPicker
            containerProps={{
                height: open === true ? 220 : null,
              }} 
            open={currencyOpen}
            value={currencyValue}
            items={currencies}
            setOpen={setCurrencyOpen}
            setValue={setCurrencyValue}
            setItem={setCurrencies}
            onChangeValue={(value) => {
                setCurrency(value)
            }}
            />
            <Button 
            title='Add Expense'
            onPress={() => {
                addTransaction(type, amount, categoryId,description, currency_id, user.uid)
                .then((data) => {
                    setMessage(true)
                })
            }}
            />
            <Button onPress={() => {
                navigation.goBack()
            }} title='Dismiss'/>
        </SafeAreaView>
    )
    
}

export default Expense