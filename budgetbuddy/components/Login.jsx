import { Button, Text, TextInput, View, SafeAreaView } from 'react-native';
import { styles } from '../styles';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.login}>
      <TextInput value="test" />
      <Button
        title="New User"
        onPress={() => {
          navigation.navigate('New User');
        }}
      />
    </SafeAreaView>
  );
};

export default Login;