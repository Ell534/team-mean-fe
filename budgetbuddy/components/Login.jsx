import { Button, Text, TextInput, View, SafeAreaView } from "react-native";
import { styles } from "../styles";
import Header from "./Header";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation, setIsLoggedIn, setUser }) => {
  const [email, onChangeEmail] = useState('elliot94b@gmail.com');
  const [password, onChangePassword] = useState('password');
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const auth = getAuth();

  return (
    <SafeAreaView style={styles.login}>
      <Header />
      <TextInput
        placeholder="email"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeEmail}
        text={email}
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
          // setLoginDetails(
          //   { ...loginDetails, username: userName, password: password }
          //   //post request using loginDetails as the request body
          // );
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // console.log(user);
              setUser(user);
              setIsLoggedIn(true);
              // console.log(user.uid, 'uid');
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // console.log(
              //   email,
              //   "email",
              //   password,
              //   "password",
              //   errorCode,
              //   "<--error code",
              //   errorMessage,
              //   "<--message"
              // );
            });
        }}
      />
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("Sign Up");
        }}
      />
    </SafeAreaView>
  );
};

export default Login;
