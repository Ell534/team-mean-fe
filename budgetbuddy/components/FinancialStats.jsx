
import { StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
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
          <Text style={styles.titleTextStyle}>{chartData[0].toUpperCase() + chartData.substring(1)}</Text>
          <Text style={styles.titleTextStyle}>(Personal)</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.buttonRow}>
        <Pressable onPress={handleAllPress} style={styles.buttons}><Text style={styles.buttonText}>All</Text></Pressable>
        <Pressable onPress={handleIncomePress} style={styles.buttons}><Text style={styles.buttonText}>Income</Text></Pressable>
        <Pressable onPress={handleExpensesPress} style={styles.buttons}><Text style={styles.buttonText}>Expenses</Text></Pressable>
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
    backgroundColor: '#080043',
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
    alignContent: "center",
    backgroundColor: '#0800436f',
    paddingLeft: 20,
  },

  dataPresentationContainer: {
    backgroundColor: '#080043',
    flex: 10,
  },
  buttons: {
    borderWidth: 2,
    borderColor: "#00FFA6",
    justifyContent: "center",
    borderRadius: 10,
    height: 30,
    width: 100, 
    backgroundColor: "#080043",
    marginHorizontal: 10,
    alignItems: "center",
    alignContent: "center"
  },
  buttonText: {
    color: "#f4f7f6",
    textAlign: "center", // center the text inside the button
    width: 100,
  },
});

export default FinancialStats