
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import PieChart from "./PieChart.jsx";
import React, { useState, useEffect } from "react";
import { fetchbudgetData } from "../utils/api.js";

const user_id = 1;

 const FinancialStats = ({ user, navigation }) => {
  const [budgetData, setBudgetData] = useState({});
  const [chartData, setChartData] = useState("all");

  useEffect(() => {
    fetchbudgetData(user_id).then((response) => {
      setBudgetData(response[0]);
    });
  }, []);

  const handleAllPress = () => {
    setChartData("all");
  };

  const handleIncomePress = () => {
    setChartData("income");
  };

  const handleExpensesPress = () => {
    setChartData("expenses");
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <SafeAreaView style={styles.pageContainer}>
        <SafeAreaView style={styles.titleContainer}>
          <Text style={styles.titleTextStyle}>Finance Stats</Text>
          <Text style={styles.titleTextStyle}>(Personal)</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.buttonRow}>
          <Button title="All" onPress={handleAllPress} />
          <Button title="Income" onPress={handleIncomePress} />
          <Button title="Expense" onPress={handleExpensesPress} />
        </SafeAreaView>

        <SafeAreaView style={styles.dataPresentationContainer}>
          <Text></Text>
          <SafeAreaView style={styles.container}>
            <PieChart budgetData={budgetData} chartData={chartData} />
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    // paddingHorizontal: 16,
  },
  pageContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "00FFA6",
    alignItems: "center",
    justifyContent: "center",
  },
  titleTextStyle: {
    alignItems: "center",
    color: "white",
  },
  buttonRow: {
    flexDirection: "row",
    borderRadius: 6,
    flex: 1,
    justifyContent: "space-between",
    width: "85%",
    alignItems: "center",
    backgroundColor: "#DAF5FF",
    paddingLeft: 45,
  },

  dataPresentationContainer: {
    backgroundColor: "#00FFA6",
    flex: 10,
  },
});

export default FinancialStats