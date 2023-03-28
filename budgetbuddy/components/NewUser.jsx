import { Text, SafeAreaView } from 'react-native';
import { styles } from '../styles';

const NewUser = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.newUser}>
      <Text>Test text</Text>
    </SafeAreaView>
  );
};

export default NewUser;