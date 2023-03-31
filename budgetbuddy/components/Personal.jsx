import { Text, Button, SafeAreaView } from "react-native"

const Personal = ({navigation}) => {
    return (
        <SafeAreaView>
        <Button onPress={() => {
            navigation.navigate('Expense')
        }} title='Add Expense'/>
        <Button onPress={() => {
            navigation.navigate('Income')
        }} title='Add Income'/>
        </SafeAreaView>
    )
}

export default Personal