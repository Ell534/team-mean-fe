<<<<<<< HEAD
import { Text, Pressable, SafeAreaView, StyleSheet } from 'react-native';
=======
import { Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
>>>>>>> fbe75dfedca8d9794558aa543fa83c6715f782f4

const Personal = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Expense");
        }}
<<<<<<< HEAD
        
=======
        title="Add Expense"
>>>>>>> fbe75dfedca8d9794558aa543fa83c6715f782f4
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Add Expense</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Income");
        }}
<<<<<<< HEAD
=======
        title="Add Income"
>>>>>>> fbe75dfedca8d9794558aa543fa83c6715f782f4
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Add Income</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("SpendingStats");
        }}
<<<<<<< HEAD
=======
        title="Spending Stats"
>>>>>>> fbe75dfedca8d9794558aa543fa83c6715f782f4
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Spending Stats</Text>
      </Pressable>
      <Pressable
        onPress={() => {
<<<<<<< HEAD
          navigation.navigate('Personal Goals');
        }}
=======
          navigation.navigate("Personal Goals");
        }}
        title="Set & View Goals"
>>>>>>> fbe75dfedca8d9794558aa543fa83c6715f782f4
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Set & View Goals</Text>
      </Pressable>
      <Pressable
        onPress={() => {
<<<<<<< HEAD
          navigation.navigate('Budget');
        }}
=======
          navigation.navigate("Budget");
        }}
        title="Set & View Budget"
>>>>>>> fbe75dfedca8d9794558aa543fa83c6715f782f4
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Set & View Budget</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Personal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
<<<<<<< HEAD
    backgroundColor: '#080043',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#FC6C16',
=======
    backgroundColor: "#080043",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#FC6C16",
>>>>>>> fbe75dfedca8d9794558aa543fa83c6715f782f4
  },
  buttons: {
    flex: 0.1,
    borderWidth: 2,
<<<<<<< HEAD
    borderColor: '#00FFA6',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 50,
    width: 150,
    backgroundColor: '#0800436f',
  },
  buttonText: {
    color: '#f4f7f6',
=======
    borderColor: "#00FFA6",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 50,
    width: 150,
    backgroundColor: "#476B91",
  },
  buttonText: {
    color: "#f4f7f6",
>>>>>>> fbe75dfedca8d9794558aa543fa83c6715f782f4
    padding: 10,
    fontSize: 15,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
});

// white: #F4F7F6
// yellow: #F0F00F
// pink: #EC20D8
// orange: #FC6C16
<<<<<<< HEAD
// blue: #080043
=======
// blue: #080043
>>>>>>> fbe75dfedca8d9794558aa543fa83c6715f782f4
