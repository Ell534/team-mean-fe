
import { StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import PieChart from "./PieChart.jsx";
import React, { useState, useEffect } from "react";
import { fetchbudgetData } from "../utils/api.js";
import MonthSelector from './MonthSelector.jsx';
import monthNames from "../assets/Templates.jsx";
import ListItems from "./ListItems.jsx";
// import ItemForList from "./ItemForList.jsx";



const user_id = 1;

 const FinancialStats = ({ user, navigation }) => {
  const [budgetData, setBudgetData] = useState({});
  const [chartData, setChartData] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState(monthNames[new Date().getMonth()]);

const handleMonthChange = (month) => {
  setSelectedMonth(month);
};

  useEffect(() => {
    fetchbudgetData(user_id).then((response) => {
      setBudgetData(response[0]);
    });
  }, [selectedMonth]);

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
          <MonthSelector onMonthChange={handleMonthChange} />
        </SafeAreaView>

        <SafeAreaView style={styles.buttonRow}>
        <Pressable onPress={handleAllPress} style={styles.buttons}><Text style={styles.buttonText}>All</Text></Pressable>
        <Pressable onPress={handleIncomePress} style={styles.buttons}><Text style={styles.buttonText}>Income</Text></Pressable>
        <Pressable onPress={handleExpensesPress} style={styles.buttons}><Text style={styles.buttonText}>Expenses</Text></Pressable>
        </SafeAreaView>

        <SafeAreaView style={styles.dataPresentationContainer}>
  <SafeAreaView style={styles.chartContainer}>
    <PieChart budgetData={budgetData} chartData={chartData} selectedMonth={selectedMonth} />
  </SafeAreaView>
  <SafeAreaView style={styles.listContainer}>
    <ListItems  budgetData={budgetData}
    chartData={chartData}
    selectedMonth={selectedMonth}/>
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
    flex: 2,
    backgroundColor: "00FFA6",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: '#FC6C16',
    justifyContent: "space-around",
  },
  titleTextStyle: {
    alignItems: "center",
    color: "#00FFA6",
    fontSize: 30,
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
    backgroundColor: "#3e5174",
    marginHorizontal: 10,
    alignItems: "center",
    alignContent: "center"
  },
  buttonText: {
    color: "#f4f7f6",
    textAlign: "center",
    width: 100,
  },
  chartContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  listContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FinancialStats