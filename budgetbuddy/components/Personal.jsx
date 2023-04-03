import { Text, Button, SafeAreaView } from 'react-native';

const Personal = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        onPress={() => {
          navigation.navigate('Expense');
        }}
        title="Add Expense"
      />
      <Button
        onPress={() => {
          navigation.navigate('Income');
        }}
        title="Add Income"
      />
      <Button
        onPress={() => {
          navigation.navigate('SpendingStats');
        }}
        title="Spending Stats"
      />
      <Button onPress={() => {
        navigation.navigate('Goals');
      }}
      title="Set & View Goals" />
      <Button onPress={() => {
        navigation.navigate('Budget');
      }}
      title='Set & View Budget' />
    </SafeAreaView>
  );
};

export default Personal;
