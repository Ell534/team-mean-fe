import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { VictoryPie } from "victory-native";

const PieChart = ({ budgetData, chartData }) => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    const updatedData = getPieChartData();
    setPieChartData(updatedData);
  }, [chartData]);

  const getPieChartData = () => {
    let data = [];
    if (!budgetData.categoryIncome || !budgetData.categorySpends) {
      return data;
    }
    if (chartData === "all" || chartData === "income") {
      budgetData.categoryIncome.March.forEach((item) => {
        const existingItem = data.find((d) => d.x === item.mainCategoryName);
        if (existingItem) {
          existingItem.y += item.amount;
        } else {
          data.push({
            x: item.mainCategoryName,
            y: item.amount,
          });
        }
      });
    }
    if (chartData === "all" || chartData === "expenses") {
      budgetData.categorySpends.March.forEach((item) => {
        const existingItem = data.find((d) => d.x === item.mainCategoryName);
        if (existingItem) {
          existingItem.y += item.amount;
        } else {
          data.push({
            x: item.mainCategoryName,
            y: item.amount,
          });
        }
      });
    }
    return data;
  };

  return (
    <View style={styles.container}>
      <VictoryPie
        data={getPieChartData()}
        colorScale="qualitative"
        labelRadius={({ innerRadius }) => innerRadius + 15}
        radius={150}
        innerRadius={70}
        style={{
          labels: {
            fill: "white",
            fontSize: 14,
            fontWeight: "bold",
            padding: 50,
          },
        }}
        // height={280}
        // width={250}
        // innerRadius={100}
        // padAngle={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "#cccccc",
    borderRadius: 5,
  },
});

export default PieChart;
