import { StatusBar } from 'expo-status-bar';
import Login from './components/Login';
import NewUser from './components/NewUser';
import Home from './components/Home'
import Personal from './components/Personal';
import Group from './components/Group';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import Expense from './components/Expense';
import Income from './components/Income';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#00ffa6' },
          headerTintColor: '#292e64',
        }}
      >
        <Stack.Group>
        {isLoggedIn ? (<>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Personal' component={Personal}/>
        <Stack.Screen name='Group' component={Group}/>
        </>) : (<>
        <Stack.Screen name="Login"> 
        {(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen> 
        <Stack.Screen name="Sign Up" component={NewUser} />
        </>)}
        </Stack.Group>

        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name='Expense' component={Expense}/>
          <Stack.Screen name='Income' component={Income}/>
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
