import { Text, SafeAreaView, View, TextInput, Button } from 'react-native';
import { styles } from '../styles';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

// name, username, email, password, password confirm, currency

const NewUser = ({ navigation }) => {
  const [name, onChangeName] = useState('');
  const [username, onChangeUsername] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [passwordConfirm, onChangePasswordConfirm] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [currencies, setCurrencies] = useState([
    { label: 'Mexican Peso', value: 'mexicanPeso' },
    { label: 'Saudi Riyal', value: 'saudiRiyal' },
    { label: 'GBP', value: 'gbp' },
  ]);
  const [currency, setCurrency] = useState('')
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    currency: '',
  });

  console.log(newUser);

  return (
    <SafeAreaView style={styles.newUser}>
      <TextInput
        style={styles.text}
        placeholder="Enter your name"
        required
        text={name}
        onChangeText={onChangeName}
      />
      <TextInput
        style={styles.text}
        placeholder="Enter your username"
        required
        text={username}
        onChangeText={onChangeUsername}
      />
      <TextInput
        style={styles.text}
        placeholder="Enter your email"
        inputMode="email"
        required
        text={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.text}
        placeholder="Enter a password"
        secureTextEntry={true}
        required
        text={password}
        onChangeText={onChangePassword}
      />
      <TextInput
        style={styles.text}
        placeholder="Re-enter the password"
        secureTextEntry={true}
        required
        text={passwordConfirm}
        onChangeText={onChangePasswordConfirm}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={currencies}
        setOpen={setOpen}
        setValue={setValue}
        setItem={setCurrencies}
        onChangeValue={(value) => {
          setCurrency(value)
        }}
      />
      <Button
        title="Submit"
        onPress={() => {
          setNewUser({
            ...newUser,
            name,
            username,
            email,
            password,
            passwordConfirm,
            currency,
          });
          // post request using newUser as the request body to create
          // a new user on the DB
        }}
      />
    </SafeAreaView>
  );
};

export default NewUser;
