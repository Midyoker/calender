/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function CalendarScreen({ navigation }) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/calendar')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Calendar</Text>
        <ScrollView horizontal>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <Text key={index} style={styles.day}>{day}</Text>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={styles.scrollView}>
        {data.map((month, index) => (
          <View key={index}>
            <Text style={styles.month}>{month.name}</Text>
            <View style={styles.datesContainer}>
              {month.dates.map((date, dateIndex) => (
                <TouchableOpacity
                  key={dateIndex}
                  style={styles.dateCard}
                  onPress={() => navigation.navigate('Reminder', { date })}
                >
                  <Text style={styles.dateText}>{date}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#696969',
    padding: 10,
  },
  heading: {
    fontSize: 22,
    color: '#FF0000',
    textAlign: 'center',
    fontWeight: '600',
  },
  day: {
    fontSize: 14,
    fontFamily: 'Georgia',
    fontWeight: '600',
    marginRight: 34,
    color: '#ffff',
  },
  scrollView: {
    padding: 10,
  },
  month: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateCard: {
    width: 50,
    height: 50,
    margin: 5,
    backgroundColor: '#E72D2D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  dateText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CalendarScreen;
