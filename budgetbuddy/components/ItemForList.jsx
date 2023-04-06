import { StyleSheet, View, Text } from "react-native";

const ItemForList = (props) => {
  return (
    <View style={styles.listItems}>
     <Text style={styles.listText}>{props.item.mainCategoryName}: £{(props.item.amount / 100)} {props.item.icon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#0800436f",
    borderWidth: 2,
    borderColor: "#00FFA6",
    minWidth:" 70%",
  },
  listText: {
    color: "white",
    textAlign: "center",
  },
});

export default ItemForList