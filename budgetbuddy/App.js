import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useEffect } from 'react';
import Login from './components/Login';
import NewUser from './components/NewUser';
import Home from './components/Home';
import Personal from './components/Personal';
import Group from './components/Group';
import PersonalGoals from './components/PersonalGoals';
import Expense from './components/Expense';
import Income from './components/Income';
import NewPersonalGoal from './components/NewPersonalGoal';
import { Button } from 'react-native';
import {
  checkIfRegistered,
  checkIfRegisteredBudget,
  postRegisteredBudget,
} from './utils/api';

import RegisterUserData from './components/RegisterUserData';
import FinancialStats from './components/FinancialStats';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isRegisteredBudget, setIsRegisteredBudget] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      if (!isRegistered) {
        checkIfRegistered(user.uid).then((userData) => {
          if (userData) {
            setIsRegistered(true);
          }
        });
      }
      if (!isRegisteredBudget) {
        checkIfRegisteredBudget(user.uid).then((userData) => {
          if (userData) {
            setIsRegisteredBudget(true);
          } else {
            postRegisteredBudget(user.uid, {
              income_t_count: 0,
              expense_t_count: 0,
              balance: 0,
              total_income: 0,
              total_expenses: 0,
            });
          }
        });
      }
    }
  }, [isLoggedIn]);

  // console.log(user.uid, '<--user id', user.getToken(), '<-- user token');

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#080043' },
          headerTintColor: '#f4f7f6',
        }}
      >
        <Stack.Group>
          {isLoggedIn ? (
            <>
              {isRegistered ? (
                <></>
              ) : (
                <Stack.Screen name="RegisterUserData">
                  {(props) => <RegisterUserData {...props} user={user} />}
                </Stack.Screen>
              )}
              <Stack.Screen name="Home">
                {(props) => <Home {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Stack.Screen>

              <Stack.Screen name="Personal" component={Personal} />
              <Stack.Screen name="Group" component={Group} />
              <Stack.Screen name="Financial Stats" component={FinancialStats} />
              <Stack.Screen name="Personal Goals">
                {(props) => <PersonalGoals {...props} user={user} />}
              </Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen name="Login">
                {(props) => (
                  <Login
                    {...props}
                    setIsLoggedIn={setIsLoggedIn}
                    setUser={setUser}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen name="Sign Up" component={NewUser} />
            </>
          )}
        </Stack.Group>

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Expense">
            {(props) => <Expense {...props} user={user} />}
          </Stack.Screen>
          <Stack.Screen name="Income">
            {(props) => <Income {...props} user={user} />}
          </Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
{
  /* const styles = StyleSheet.create({
  container: {
    borderColor: '#EC20D8',
  },
 }); */
}
