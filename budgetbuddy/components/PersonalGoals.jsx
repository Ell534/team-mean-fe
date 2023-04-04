import { Text, SafeAreaView, FlatList } from 'react-native';
import { getUserGoals } from '../utils';
import { useState, useEffect } from 'react';
import { styles } from '../styles';

const PersonalGoals = ({ user }) => {
  const [userGoals, setUserGoals] = useState([]);

  useEffect(() => {
    getUserGoals(user.uid).then((goals) => {
      setUserGoals(goals);
    });
  }, []);

  return (
    <SafeAreaView style={styles.login}>
      <Text style={styles.titleText}>Money Goals!</Text>
      <FlatList
        data={userGoals}
        renderItem={(item) => {
          const targetDate = new Date(item.item.target_date).toLocaleDateString(
            'en-GB'
          );
          // console.log(item.index);
          return (
            <SafeAreaView>
              <Text style={styles.goalsText}>
                {`
                Goal Number: ${item.index + 1}
                Balance: £${item.item.balance}, 
                Deposit: £${item.item.deposit}, 
                Deposit Frequency: ${item.item.deposit_frequency},
                Reason: ${item.item.reason}
                Target Amount: £${item.item.target_amount}
                Target Date: ${targetDate}              
                `}
              </Text>
            </SafeAreaView>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default PersonalGoals;
