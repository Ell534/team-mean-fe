import { Text, Pressable, SafeAreaView, StyleSheet } from "react-native";

const Home = ({ navigation, setIsLoggedIn }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Personal");
        }}
        title="Personal"
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Personal</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Group");
        }}
        title="Group"
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Group</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setIsLoggedIn(false);
        }}
        title="Logout"
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
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