import { Text, Button, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from '../styles';
import DropDownPicker from 'react-native-dropdown-picker';

const Expense = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [amount, onChangeAmount] = useState(0);
  const [date, onChangeDate] = useState('');
  const [location, onChangeLocation] = useState('');
  const [business, onChangeBusiness] = useState('');
  const [category, setCategory] = useState('');
  const [notes, onChangeNotes] = useState('');
  const [categories, setCategories] = useState([
    { label: 'Food', value: 'Food' },
    { label: 'Social', value: 'Social Life' },
    { label: 'Transportation', value: 'Transportation' },
    { label: 'Household', value: 'Household' },
  ]);
  const [expenseDetails, setExpenseDetails] = useState({
    amount: 0,
    date: '',
    location: '',
    business: '',
    category: '',
    notes: '',
  });

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Amount"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeAmount}
        text={amount}
        style={styles.placeholderText}
      />
      <TextInput
        placeholder="date"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeDate}
        text={date}
        style={styles.placeholderText}
      />
      <TextInput
        placeholder="location"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeLocation}
        text={location}
        style={styles.placeholderText}
      />
      <TextInput
        placeholder="business"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeBusiness}
        text={business}
        style={styles.placeholderText}
      />
      <DropDownPicker
        containerProps={{
          height: open === true ? 220 : null,
        }}
        open={open}
        value={value}
        items={categories}
        setOpen={setOpen}
        setValue={setValue}
        setItem={setCategories}
        onChangeValue={(value) => {
          setCategory(value);
        }}
      />
      <TextInput
        placeholder="notes"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeNotes}
        text={notes}
        style={styles.placeholderText}
      />
      <Button
        title="Add Expense"
        onPress={() => {
          setExpenseDetails({
            ...expenseDetails,
            amount,
            date,
            location,
            business,
            category,
            notes,
          });
        }}
      />
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Dismiss"
      />
    </SafeAreaView>
  );
};

export default Expense;
