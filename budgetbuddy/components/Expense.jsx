import { Button, SafeAreaView, TextInput, Text, StyleSheet, Pressable } from "react-native"
import { useState } from "react"
// import { styles } from "../styles";
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
        return (<SafeAreaView style={styles.container}>
            <Text style={styles.text}>Your expense has been added!</Text>
            <Pressable onPress={() => {
                navigation.goBack();
<<<<<<< HEAD
            }} 
=======
            }}
>>>>>>> eca3f738858dbfd0cdcecdc143ae3225d8778dc9
            title="Dismiss"
            style={styles.buttons}
            >
              <Text style={styles.buttonText}>Dismiss</Text>
            </Pressable>
        </SafeAreaView> )
    }
    return (
        <SafeAreaView style={styles.container}>
<<<<<<< HEAD
            <TextInput 
=======
            <TextInput
>>>>>>> eca3f738858dbfd0cdcecdc143ae3225d8778dc9
            placeholder="  Amount   "
            placeholderTextColor='#F4F7F6'
            onChangeText={onChangeAmount}
            text={amount}
            style={styles.textInput}
            inputMode='numeric'
            />
<<<<<<< HEAD
            <TextInput 
=======
            <TextInput
>>>>>>> eca3f738858dbfd0cdcecdc143ae3225d8778dc9
            placeholder="Description"
            placeholderTextColor='#F4F7F6'
            onChangeText={onChangeDescription}
            text={description}
            style={styles.textInput}
            />
            <SafeAreaView>
<<<<<<< HEAD

=======
>>>>>>> eca3f738858dbfd0cdcecdc143ae3225d8778dc9
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
<<<<<<< HEAD
            //   }} 
=======
            //   }}
>>>>>>> eca3f738858dbfd0cdcecdc143ae3225d8778dc9
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
<<<<<<< HEAD
            <Pressable 
=======
            <Pressable
>>>>>>> eca3f738858dbfd0cdcecdc143ae3225d8778dc9
            onPress={() => {
                addTransaction(type, amount, categoryId,description, currency_id, user.uid)
                .then((data) => {
                    setMessage(true)
                })
            }}
            title="Add Expense"
            style={styles.buttons}
            >
              <Text style={styles.buttonText}>Add Expense</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.goBack();
<<<<<<< HEAD
            }} 
=======
            }}
>>>>>>> eca3f738858dbfd0cdcecdc143ae3225d8778dc9
            title="Dismiss"
            style={styles.buttons}
            >
              <Text style={styles.buttonText}>Dismiss</Text>
            </Pressable>
        </SafeAreaView>
    )
}
<<<<<<< HEAD

export default Expense

=======
export default Expense
>>>>>>> eca3f738858dbfd0cdcecdc143ae3225d8778dc9
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
<<<<<<< HEAD
      color: "#FC6C16",
=======
      color: "white",
>>>>>>> eca3f738858dbfd0cdcecdc143ae3225d8778dc9
      padding: 10,
      fontSize: 15,
      // justifyContent: 'center',
      // alignContent: 'center'
    },
    text: {
<<<<<<< HEAD
        color: '#f0f00f',
=======
        color: '#F0F00F',
>>>>>>> eca3f738858dbfd0cdcecdc143ae3225d8778dc9
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
<<<<<<< HEAD

    }
  });
=======
    }
  });
>>>>>>> eca3f738858dbfd0cdcecdc143ae3225d8778dc9
