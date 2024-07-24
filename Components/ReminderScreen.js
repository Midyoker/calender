import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function ReminderScreen({ route, navigation }) {
  const { date } = route.params;
  const [reminder, setReminder] = useState('');

  const saveReminder = () => {
    console.log(`Reminder for ${date}: ${reminder}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Reminder for {date}</Text>
      <TextInput
        style={styles.input}
        value={reminder}
        onChangeText={setReminder}
        placeholder="Enter reminder"
      />
      <Button title="Save" onPress={saveReminder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default ReminderScreen;
