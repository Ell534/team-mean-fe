import { Text, SafeAreaView } from 'react-native';
import { styles } from '../styles';


const Header = () => {
  return (
    <SafeAreaView style={styles.title}>
      <Text style={styles.text}>Budget Buddy</Text>
    </SafeAreaView>
  );
};

export default Header;