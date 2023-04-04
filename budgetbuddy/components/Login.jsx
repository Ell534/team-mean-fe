import {
  Button,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Header from "./Header";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation, setIsLoggedIn, setUser }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const auth = getAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TextInput
        placeholder="       Type Email...  "
        onChangeText={onChangeEmail}
        text={email}
        style={styles.placeholderText}
      />
      <TextInput
        placeholder="    Type Password...  "
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
              console.log(user);
              setUser(user);
              setIsLoggedIn(true);
              console.log(user.uid, "uid");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(
                email,
                "email",
                password,
                "password",
                errorCode,
                "<--error code",
                errorMessage,
                "<--message"
              );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: "#080043",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    borderColor: "#FC6C16",
  },
  placeholderText: {
    placeholderTextColor: "#FC6C16",
    borderRadius: 20,
    height: 50,
    width: 150,
    borderWidth: 2,
    backgroundColor: "#476B91",

    borderColor: "#00FFA6",
  },
});

// white: #F4F7F6
// yellow: #F0F00F
// pink: #EC20D8
// orange: #FC6C16
// blue: #080043
