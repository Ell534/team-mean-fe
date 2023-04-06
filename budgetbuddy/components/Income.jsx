import { Button, SafeAreaView, TextInput, Text, StyleSheet, Pressable } from "react-native"
import { useState } from "react"
// import { styles } from "../styles"
import DropDownPicker from 'react-native-dropdown-picker';
import { addTransaction } from "../utils/api";
const Income = ({navigation, user}) => {
    const type = 'income'
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
        {label: 'Salary', value: 1},
        {label: 'Invesments', value: 2},
        {label: 'Freelance Work', value: 3},
        {label: 'Bonus', value: 28},
    ]);
    // const [incomeDetails, setIncomeDetails] = useState({
    //     userId: user.uid,
    //     budgetId: user.uid,
    //     categoryId: 0,
    //     type: 'income',
    //     description: '',
    //     amount: 0,
    //     date: new Date(),
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //     currency_id: 0,
    // })
    if (message) {
        return (<SafeAreaView style={styles.container}>
            <Text style={styles.text}>Your income has been added!</Text>
            <Pressable onPress={() => {
                navigation.goBack();
            }}
            title="Dismiss"
            style={styles.buttons}
            >
              <Text style={styles.buttonText}>Dismiss</Text>
            </Pressable>
        </SafeAreaView> )
    }
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
            placeholder="  Amount   "
            placeholderTextColor='#F4F7F6'
            onChangeText={onChangeAmount}
            text={amount}
            style={styles.textInput}
            inputMode='numeric'
            />
            <TextInput
            placeholder="Description"
            placeholderTextColor='#F4F7F6'
            onChangeText={onChangeDescription}
            text={description}
            style={styles.textInput}
            />
            <SafeAreaView>
             <DropDownPicker
             dropDownDirection="TOP"
             style={styles.dropDownStyle}
            //  containerProps={{
            //     height: open === true ? 220 : null,
            //   }}
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
            dropDownDirection="TOP"
            style={styles.dropDownStyle}
            // containerProps={{
            //     height: open === true ? 220 : null,
            //   }}
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
            </SafeAreaView>
            <Pressable
            onPress={() => {
                addTransaction(type, amount, categoryId,description, currency_id, user.uid)
                .then((data) => {
                    setMessage(true)
                })
            }}
            title="Add Expense"
            style={styles.buttons}
            >
              <Text style={styles.buttonText}>Add Income</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.goBack();
            }}
            title="Dismiss"
            style={styles.buttons}
            >
              <Text style={styles.buttonText}>Dismiss</Text>
            </Pressable>
        </SafeAreaView>
    )
}
export default Income
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection: 'row',
      backgroundColor: "#080043",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: 20,
      borderTopWidth: 1,
      borderColor: "#FC6C16",
    },
    buttons: {
      flex: 0.1,
      borderWidth: 1,
      borderColor: "#00FFA6",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      borderRadius: 20,
      height: 50,
      width: 150,
    //   backgroundColor: "#476B91",
    },
    buttonText: {
      color: "white",
      padding: 10,
      fontSize: 15,
      // justifyContent: 'center',
      // alignContent: 'center'
    },
    text: {
        color: '#F0F00F',
        fontSize: 20
    },
    textInput: {
        color: '#F4F7F6',
        borderColor: '#00FFA6',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 100,
        paddingRight: 100,
        marginBottom: -30
    },
    dropDownStyle: {
        // backgroundColor: '#080043',
        width: 300,
        // justifyContent: 'center',
        marginBottom: 10,
    }
  });