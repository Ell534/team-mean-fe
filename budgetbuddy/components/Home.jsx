import { Button, SafeAreaView } from "react-native"

const Home = ({ navigation }) => {
 return (
    <SafeAreaView>
        <Button title='Personal' onPress={() => {navigation.navigate('Personal')}}/>
        <Button title="Group" onPress={() => {navigation.navigate('Group')}}/>
    </SafeAreaView>
 )
}

export default Home