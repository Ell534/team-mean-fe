import { Button, SafeAreaView, TextInput } from "react-native"
import { useState } from "react"
import { styles } from "../styles"


const Income = ({navigation}) => {
    const [amount, onChangeAmount] = useState(0)
    const [date, onChangeDate] = useState('')
    const [type, onChangeType] = useState('')
    const [notes, onChangeNotes] = useState('')
    const [incomeDetails, setIncomeDetails] = useState({
        amount: 0,
        date: '',
        type: '',
        notes: '',
    })

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
             placeholder="date"
             placeholderTextColor='#e2b44e'
             onChangeText={onChangeDate}
             text={date}
             style={styles.placeholderText}
            />
            <TextInput
             placeholder="type"
             placeholderTextColor='#e2b44e'
             onChangeText={onChangeType}
             text={type}
             style={styles.placeholderText}
            />
            <TextInput
             placeholder="notes"
             placeholderTextColor='#e2b44e'
             onChangeText={onChangeNotes}
             text={notes}
             style={styles.placeholderText}
            />
            <Button title='Add Income' onPress={() => {
                setIncomeDetails(
                    {...incomeDetails, amount, date, type, notes}
                )
            }} />
            <Button onPress={() => {
                navigation.goBack()
            }} title='Dismiss'/>
        </SafeAreaView>
    )
}

export default Income