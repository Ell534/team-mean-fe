import { Text, Button } from "react-native"

const Personal = ({navigation}) => {
    return (
        <Button onPress={() => {
            navigation.navigate('Expense')
        }} title='Add Expense'/>
    )
}

export default Personal