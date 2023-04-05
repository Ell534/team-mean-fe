import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import monthNames from '../assets/Templates';

const MonthSelector = ({ onMonthChange }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    useEffect(() => {
      onMonthChange(monthNames[currentMonth]);
    }, [currentMonth]);
  
    const handlePreviousMonth = () => {
      const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      setCurrentMonth(prevMonth);
    };
  
    const handleNextMonth = () => {
      const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      setCurrentMonth(nextMonth);
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handlePreviousMonth} style={styles.button}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{monthNames[currentMonth]}</Text>
        <TouchableOpacity onPress={handleNextMonth} style={styles.button}>
          <Text style={styles.buttonText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 20,
    color:"#FC6C16",

  },
  monthText: {
    fontSize: 20,
    paddingHorizontal: 10,
    color:"white",
  },
});

export default MonthSelector;
