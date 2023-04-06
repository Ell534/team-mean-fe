import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ItemForList from "./ItemForList.jsx";

export default function ListItems({ budgetData, chartData, selectedMonth }) {
    const [listItems, setListItems] = useState([]);
  
   // ListItems file
// ...

useEffect(() => {
    let data = [];
  
    if (chartData === "all" || chartData === "income") {
      if (budgetData.categoryIncome && budgetData.categoryIncome[selectedMonth]) {
        data = data.concat(budgetData.categoryIncome[selectedMonth]);
      }
    }
  
    if (chartData === "all" || chartData === "expenses") {
      if (budgetData.categorySpends && budgetData.categorySpends[selectedMonth]) {
        data = data.concat(budgetData.categorySpends[selectedMonth]);
      }
    }
  
    setListItems(data);
  }, [budgetData, chartData, selectedMonth]);
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.goalsContainer}>
        <FlatList
          data={listItems}
          renderItem={(itemData) => {
            return <ItemForList
            item={itemData.item}
         />;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
});