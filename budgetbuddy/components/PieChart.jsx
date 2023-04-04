import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { VictoryPie } from "victory-native";

const PieChart = ({ budgetData, chartData, selectedMonth }) => {
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
      const mapData = budgetData.categoryIncome[selectedMonth]
      mapData.forEach((item) => {
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
      const mapData = budgetData.categorySpends[selectedMonth]
      mapData.forEach((item) => {
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
        colorScale={["#7F5A83","#95C623","#EC20D8", "#FC6C16", "#8B939C", "#FF0035", "#78BC61", "#F0F00F", "#066e24", "#E55812"]}
        labelRadius={({ innerRadius }) => innerRadius + 6 }
        labelPosition={ "centroid"}
        labelPlacement={"parallel"}
        radius={150}
        innerRadius={60}
        padAngle={1}
        style={{
          labels: {
            fill: "white",
            fontSize: 17,
            fontWeight: "bold",
            // padding: 50,
            backgroundColor: '#080043',
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
    marginTop: 20,

  },
  // button: {
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  //   marginHorizontal: 5,
  //   backgroundColor: '#080043',
  //   borderRadius: 5,
  // },
});

export default PieChart;

// const styles = StyleSheet.create({

// })