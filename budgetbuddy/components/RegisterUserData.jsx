import { Button, SafeAreaView, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { postRegisteredUser } from "../utils/api";
import { useState } from "react";
import { styles } from "../styles";

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

  return (
    <SafeAreaView>
      <TextInput
        placeholder="name"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeName}
        text={name}
        style={styles.placeholderText}
      />
      <TextInput
        placeholder="userName"
        placeholderTextColor="#e2b44e"
        onChangeText={onChangeUserName}
        text={userName}
        style={styles.placeholderText}
      />
      <DropDownPicker
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
        onPress={() => {
          postRegisteredUser({
            user,
            name,
            userName,
            currency,
          }).then(navigation.navigate("Home"));
        }}
      />
    </SafeAreaView>
  );
};

export default RegisterUserData;
