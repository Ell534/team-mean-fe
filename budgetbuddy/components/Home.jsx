import { Button, Text, TextInput, View, SafeAreaView } from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import { useState } from 'react';

const Login = ({ navigation }) => {
  const [userName, onChangeUsername] = useState('username');
  const [password, onChangePassword] = useState('password');
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });

  return (
    <SafeAreaView style={styles.login}>
      <Header />
      <TextInput
        placeholder="username"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeUsername}
        text={userName}
        style={styles.placeholderText}
      />
      <TextInput
        placeholder="password"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangePassword}
        text={password}
        secureTextEntry={true}
        style={styles.placeholderText}
      />
      <Button
        title="Login"
        onPress={() => {
          setLoginDetails(
            { ...loginDetails, username: userName, password: password }
            //post request using loginDetails as the request body
          );
        }}
      />
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate('Sign Up');
        }}
      />
    </SafeAreaView>
  );
};

export default Login;
