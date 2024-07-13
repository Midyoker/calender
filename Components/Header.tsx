import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

function Header() {
  return (
    <SafeAreaView>
      <View style= {styles.container}>
      <View >
         <Text style={styles.heading}>Calendar</Text>
         

      </View>
        <ScrollView style={styles.sectionTitle} horizontal={true}>
          <Text style={styles.day}>Son </Text>
          <Text style={styles.day}>Mon </Text>
          <Text style={styles.day}>Tue </Text>
          <Text style={styles.day}>Wed </Text>
          <Text style={styles.day}>Thu </Text>
          <Text style={styles.day}>Fri </Text>
          <Text style={styles.day}>Sat </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#2A2B2B',
    justifyContent: 'center',
    alignItems: 'center',


  },

  heading: {
     padding: 20,
    fontSize: 22,
    color: '#E72D2D',
    // display: 'flex',
    fontWeight: '600',
     alignItems: 'center',
  },
  sectionTitle: {
    flexDirection: 'row',
    paddingLeft: 21,
  },
  day: {
    fontSize: 14,
    fontFamily: 'Georgia',
    fontWeight: '600',
    marginRight: 34,
    color: '#ffff',
  },
});
