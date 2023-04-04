import { Button, SafeAreaView, TextInput } from "react-native"
import { useState } from "react"
import { styles } from "../styles"
import DropDownPicker from 'react-native-dropdown-picker';
import { addTransaction } from "../api";


const Income = ({navigation}) => {
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
        {label: 'Salary', value: 1},
        {label: 'Invesments', value: 2},
        {label: 'Freelance Work', value: 3},
        {label: 'Bonus', value: 28},
    ]);
    const [incomeDetails, setIncomeDetails] = useState({
        userId: 0,
        budgetId: 0,
        categoryId: 0,
        type: 'income',
        description: '',
        amount: 0,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        currency_id: 0,
    })

    const handleSubmit = (event) => {
        // event.preventDefault()
        addTransaction(incomeDetails)
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
            title='Add Income'
            onPress={() => {
                setIncomeDetails(
                    {...incomeDetails, amount, categoryId, description, currency_id}
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

export default Income