import React from 'react';
import {Text, View} from 'react-native';
import Header from './Components/Header';
import DateCard from './Components/DateCard';
function App() {
  return (
    <View>
      <Header />
      <DateCard />
      <Text>Hi this calender</Text>
    </View>
  );
}

export default App;
