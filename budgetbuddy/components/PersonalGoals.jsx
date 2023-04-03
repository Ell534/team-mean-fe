import { Text, SafeAreaView } from 'react-native';
import { getUserGoals } from '../utils';
import { useState, useEffect } from 'react';

const PersonalGoals = () => {
  const [userGoals, setUserGoals] = useState([{hello: 'bob'}])
  
  useEffect(() => {});

  return (
    <SafeAreaView>
      <Text>Money Goals! {userGoals[0].hello}</Text>
    </SafeAreaView>
  );
};

export default PersonalGoals;
