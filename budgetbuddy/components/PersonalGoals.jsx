import { Text, SafeAreaView, FlatList } from 'react-native';
import { getUserGoals } from '../utils';
import { useState, useEffect } from 'react';

const PersonalGoals = () => {
  const [userGoals, setUserGoals] = useState([]);

  useEffect(() => {
    getUserGoals(1).then((goals) => {
      setUserGoals(goals);
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>Money Goals!</Text>
      <FlatList
        data={userGoals}
        renderItem={(item) => {
          console.log(Object.keys(item.item));
          // console.log(item.index);
          return (
            <SafeAreaView>
              <Text>
                {`
                Goal Number: ${item.index + 1}
                Balance: £${item.item.balance}, 
                Deposit: £${item.item.deposit}, 
                Deposit Frequency: ${item.item.deposit_frequency},
                Reason: ${item.item.reason}
                Target Amount: £${item.item.target_amount}
                Target Date: ${item.item.target_date}
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
