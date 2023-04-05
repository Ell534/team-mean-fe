import { Button, SafeAreaView } from "react-native";

const Home = ({ navigation, setIsLoggedIn }) => {
  return (
    <SafeAreaView>
      <Button
        title="Personal"
        onPress={() => {
          navigation.navigate("Personal");
        }}
      />
      <Button
        title="Group"
        onPress={() => {
          navigation.navigate("Group");
        }}
      />
      <Button
        title="Logout"
        onPress={() => {
          setIsLoggedIn(false);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
