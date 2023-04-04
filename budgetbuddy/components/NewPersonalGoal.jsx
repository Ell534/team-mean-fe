import { TextInput, SafeAreaView, Button, Text } from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

/* 
FIELDS REQUIRED
userid
target amount
balance
description
target date
deposit
deposit frequency
reason
*/

const NewPersonalGoal = ({ navigation, user }) => {
  const [targetAmount, onChangeTargetAmount] = useState(null);
  const [targetDate, setTargetDate] = useState(new Date());
  const [dateShow, setDateShow] = useState(false);
  const [deposit, onChangeDeposit] = useState(null);
  const [depositFrequency, setDepositFrequency] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [frequencies, setFrequencies] = useState([
    { label: 'Daily', value: 'Daily' },
    { label: 'Weekly', value: 'Weekly' },
    { label: 'Monthly', value: 'Monthly' },
  ]);
  const [reason, onChangeReason] = useState('');
  const [goalDetails, setGoalDetails] = useState({
    user_id: user.uid,
    targetAmount: 0,
    balance: 0,
    targetDate: null,
    deposit: 0,
    depositFrequency: '',
    reason: '',
  });

  const onDateSelect = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateShow(false);
    setTargetDate(currentDate);
  };

  console.log(goalDetails);

  return (
    <SafeAreaView>
      <Text>Enter your new saving goal details below!</Text>
      <TextInput
        placeholder="Enter your target amount to save"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeTargetAmount}
        text={targetAmount}
      />
      <TextInput
        placeholder="Enter a reason for this goal"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeReason}
        text={reason}
      />
      <TextInput
        placeholder="Deposit Amount"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeDeposit}
        text={deposit}
      />
      <DropDownPicker
        containerProps={{
          height: open === true ? 220 : null,
        }}
        open={open}
        value={value}
        items={frequencies}
        setOpen={setOpen}
        setValue={setValue}
        setItem={setFrequencies}
        onChangeValue={(value) => {
          setDepositFrequency(value);
        }}
      />
      <Button
        title="Select your target date"
        onPress={() => {
          setDateShow(true);
        }}
      />
      <Text>Your selected date: {targetDate.toLocaleDateString()}</Text>
      {dateShow && (
        <DateTimePicker value={targetDate} onChange={onDateSelect} />
      )}
      <Button
        title="Submit Goal!"
        onPress={() => {
          setGoalDetails({
            ...goalDetails,
            targetAmount: parseInt(targetAmount),
            targetDate,
            deposit: parseInt(deposit),
            depositFrequency,
            reason,
          });
          console.log(goalDetails);
        }}
      />
    </SafeAreaView>
  );
};

export default NewPersonalGoal;
