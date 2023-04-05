import { Text, Pressable, SafeAreaView, StyleSheet } from "react-native";

const Personal = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Expense");
        }}
        title="Add Expense"
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Add Expense</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Income");
        }}
        title="Add Income"
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Add Income</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Financial Stats");
        }}
        title="Financial Stats"
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Spending Stats</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Personal Goals");
        }}
        title="Set & View Goals"
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Set & View Goals</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Budget");
        }}
        title="Set & View Budget"
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
    backgroundColor: "#080043",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#FC6C16",
  },
  buttons: {
    flex: 0.1,
    borderWidth: 2,
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
// blue: #080043