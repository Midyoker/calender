import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from './Components/CalenderScreen';
import ReminderScreen from './Components/ReminderScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Calendar">
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Reminder" component={ReminderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
