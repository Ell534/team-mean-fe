import {
  Text,
  SafeAreaView,
  FlatList,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import { getUserGoals } from '../utils/api';
import { useState, useEffect } from 'react';
import NewPersonalGoal from './NewPersonalGoal';

const PersonalGoals = ({ user }) => {
  const [userGoals, setUserGoals] = useState([]);
  const [newGoal, setNewGoal] = useState(false);

  useEffect(() => {
    getUserGoals(user.uid).then((goals) => {
      setUserGoals(goals);
    });
  }, [newGoal]);

  if (newGoal) {
    return (
      <SafeAreaView style={styles.container}>
        <NewPersonalGoal user={user} setNewGoal={setNewGoal} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Savings Goals!</Text>
      <FlatList
        data={userGoals}
        renderItem={(item) => {
          const targetDate = new Date(item.item.target_date).toLocaleDateString(
            'en-GB'
          );
          // console.log(item.index);
          return (
            <SafeAreaView style={styles.container}>
              <Text style={styles.text}>
                {`
                Goal Number: ${item.index + 1}
                Reason: ${item.item.reason}
                Balance: £${item.item.balance}, 
                Deposit: £${item.item.deposit}, 
                Deposit Frequency: ${item.item.deposit_frequency},
                Target Amount: £${item.item.target_amount}
                Target Date: ${targetDate}              
                `}
              </Text>
            </SafeAreaView>
          );
        }}
      />
      <Pressable
        onPress={() => {
          setNewGoal(true);
        }}
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Set New Personal Goal</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PersonalGoals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#080043',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#FC6C16',
  },
  buttons: {
    // flex: 0.1,
    borderWidth: 2,
    borderColor: '#00FFA6',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 50,
    width: 180,
    backgroundColor: '#080043',
  },
  buttonText: {
    color: '#FC6C16',
    padding: 10,
    fontSize: 15,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  text: {
    color: '#f4f7f6',
    padding: 10,
    fontSize: 15,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
});

// white: #F4F7F6
// yellow: #F0F00F
// pink: #EC20D8
// orange: #FC6C16
// blue: #080043
