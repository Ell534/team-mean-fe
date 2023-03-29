import { Text, Button, SafeAreaView } from "react-native"

const Expense = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>Expense modal</Text>
            <Button onPress={() => {
                navigation.goBack()
            }} title='Dismiss'/>
        </SafeAreaView>
    )
}

export default Expense