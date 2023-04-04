import { Button, SafeAreaView, TextInput } from "react-native"
import { useState } from "react"
import { styles } from "../styles";
import { Text, Button, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from '../styles';
import DropDownPicker from 'react-native-dropdown-picker';

const Expense = ({navigation}) => {
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
        {label: 'Petrol',Value: 13},
        {label: 'Public Transport',Value: 14},
        {label: 'Rent',Value: 16},
        {label: 'Urilities',Value: 17},
        {label: 'Holiday',Value: 21},
        {label: 'Clothing',Value: 22}
    ]);
    const [expenseDetails, setExpenseDetails] = useState({
        userId: 0,
        budgetId: 0,
        categoryId: 0,
        type: 'expense',
        description: '',
        amount: 0,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        currency_id: 0,
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        addExpense(expenseDetails)
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
                setExpenseDetails(
                    {...expenseDetails, amount, categoryId, description, currency_id}
                )
                handleSubmit
            }}
            />
            <Button onPress={() => {
                navigation.goBack()
            }} title='Dismiss'/>
        </SafeAreaView>
    )
    
}

export default Expense