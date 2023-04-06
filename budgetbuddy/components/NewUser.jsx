import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const NewUser = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const [newUser, setNewUser] = useState({
    email: "elliot94b@gmail.com",
    password: "password",
  });

  const auth = getAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Signup</Text>;
      <TextInput
        style={styles.placeholderText}
        placeholder="       Type Email...  "
        inputMode="email"
        required
        text={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.placeholderText}
        placeholder="    Type Password...  "
        secureTextEntry={true}
        required
        text={password}
        onChangeText={onChangePassword}
      />
      <Button
        title="Submit"
        onPress={() => {
          setNewUser({
            ...newUser,
            email,
            password,
          });
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
            })
            .then(navigation.navigate("Login"))
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(newUser);
              console.log(email, "<-email", password, "<-password");
              console.log(errorCode);
              console.log(errorMessage);
            });
        }}
      />
    </SafeAreaView>
  );
};

export default NewUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  text: {
    color: "#F7B626",
    fontSize: 40,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
  },
});