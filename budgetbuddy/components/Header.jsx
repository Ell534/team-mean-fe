import { Text, SafeAreaView } from 'react-native';
import { styles } from '../styles';

const Header = () => {
  return (
    <SafeAreaView style={styles.title}>
      <Text>Budget Buddy</Text>
    </SafeAreaView>
  );
};

export default Header;