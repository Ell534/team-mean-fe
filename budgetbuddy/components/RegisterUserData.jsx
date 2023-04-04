import { Button, SafeAreaView, TextInput, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { postRegisteredUser } from "../utils/api";
import { useState } from "react";

const RegisterUserData = ({ user, navigation }) => {
  const [name, onChangeName] = useState("");
  const [userName, onChangeUserName] = useState("");
  const [currency, setCurrency] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [currencies, setCurrencies] = useState([
    { label: "Mexican Peso", value: "mexicanPeso" },
    { label: "Saudi Riyal", value: "saudiRiyal" },
    { label: "GBP", value: "gbp" },
  ]);

  const createTwoButtonAlert = () => {
    alert("please fill all the fields (っ °Д °;)っ", "My Alert Msg", []);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="       Type Name...  "
        onChangeText={onChangeName}
        text={name}
        style={styles.placeholderText}
      />
      <TextInput
        placeholder="    Type User Name... "
        onChangeText={onChangeUserName}
        text={userName}
        style={styles.placeholderText}
      />
      <DropDownPicker
        style={styles.DropDown}
        containerProps={{
          height: open === true ? 220 : null,
        }}
        open={open}
        value={value}
        items={currencies}
        setOpen={setOpen}
        setValue={setValue}
        setItem={setCurrencies}
        onChangeValue={(value) => {
          setCurrency(value);
        }}
      />
      <Button
        title="Submit"
        style={styles.buttons}
        onPress={() => {
          if (userName && name && currency) {
            postRegisteredUser({
              user,
              name,
              userName,
              currency,
            }).then(navigation.navigate("Home"));
          } else {
            createTwoButtonAlert();
          }
        }}
      />
    </SafeAreaView>
  );
};
export default RegisterUserData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: "#080043",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#FC6C16",
  },

  placeholderText: {
    placeholderTextColor: "#FC6C16",
    borderRadius: 20,
    height: 50,
    width: 150,
    margin: 20,
    borderWidth: 2,
    backgroundColor: "#476B91",
    borderColor: "#00FFA6",
  },
  DropDown: {
    margin: 20,
  },
});

// white: #F4F7F6
// yellow: #F0F00F
// pink: #EC20D8
// orange: #FC6C16
// blue: #080043
