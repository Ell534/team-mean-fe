import {
  TextInput,
  SafeAreaView,
  Button,
  Text,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addPersonalGoal } from '../utils/api';

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

const NewPersonalGoal = ({ user, setNewGoal }) => {
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
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
    enabled={Platform.OS === "ios" ? true : false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>
          Enter your new saving goal details below!
        </Text>
        <TextInput
          inputMode='numeric'
          textAlign='center'
          placeholder="Target Amount"
          placeholderTextColor="#f4f7f6"
          style={styles.textInput}
          onChangeText={onChangeTargetAmount}
          text={targetAmount}
        />
        <TextInput
          placeholder="Purpose"
          textAlign='center'
          placeholderTextColor="#f4f7f6"
          onChangeText={onChangeReason}
          style={styles.textInput}
          text={reason}
        />
        <TextInput
          inputMode='numeric'
          textAlign='center'
          placeholder="Deposit Amount"
          placeholderTextColor="#f4f7f6"
          style={styles.textInput}
          onChangeText={onChangeDeposit}
          text={deposit}
        />
        <SafeAreaView>
          <DropDownPicker
            style={styles.dropDownStyle}
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
        </SafeAreaView>
        <SafeAreaView style={{alignItems: 'center'}}>
          <Pressable
            style={styles.buttons}
            onPress={() => {
              setDateShow(true);
            }}
          >
            <Text style={styles.buttonText}>Select your target date</Text>
          </Pressable>
          <Text style={styles.selectedDateText}>
            Your selected date: {targetDate.toLocaleDateString()}
          </Text>
          {dateShow && (
            <DateTimePicker value={targetDate} onChange={onDateSelect} />
          )}
        </SafeAreaView>
        <Pressable
          style={styles.buttons}
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
            addPersonalGoal(
              user.uid,
              targetAmount,
              targetDate,
              deposit,
              depositFrequency,
              reason
            );
            setNewGoal(false);
          }}
        >
          <Text style={styles.buttonText}>Submit Goal!</Text>
        </Pressable>
        <Pressable
        onPress={() => {
          setNewGoal(false);
        }}
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Dismiss</Text>
      </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

/* user_id: user.uid,
    targetAmount: 0,
    balance: 0,
    targetDate: null,
    deposit: 0,
    depositFrequency: '',
    reason: '',*/

export default NewPersonalGoal;

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
    color: '#f4f7f6',
    padding: 10,
    fontSize: 15,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  headerText: {
    color: '#f4f7f6',
    padding: 10,
    fontSize: 18,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  text: {
    color: '#f4f7f6',
    padding: 10,
    fontSize: 18,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  selectedDateText: {
    color: '#f4f7f6',
    padding: 10,
    fontSize: 18,
    marginTop: 30,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  textInput: {
    color: '#F4F7F6',
    borderColor: '#00FFA6',
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
    // marginBottom: -30,
  },
  dropDownStyle: {
    // backgroundColor: '#080043',
    width: 300,
    // justifyContent: 'center',
    marginBottom: 10,
  },
});

// white: #F4F7F6
// yellow: #F0F00F
// pink: #EC20D8
// orange: #FC6C16
// blue: #080043
