import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function CalendarScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/calendar')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const renderDates = (month) => {
    const daysInWeek = 7;
    let weeks = [];
    let week = [];

  
    for (let i = 0; i < month.startDay; i++) {
      week.push(null);
    }

    month.dates.forEach((date, index) => {
      week.push(date);
      if (week.length === daysInWeek || index === month.dates.length - 1) {
        weeks.push(week);
        week = [];
      }
    });
    // if (week.length > 0) {
    //   while (week.length < daysInWeek) {
    //     week.push(null);
    //   }
    //   weeks.push(week);
    // }

    return weeks.map((week, index) => (
      <View key={index} style={styles.week}>
        {week.map((date, dateIndex) => (
          <TouchableOpacity
            key={dateIndex}
            style={styles.dateContainer}
            onPress={() => date && navigation.navigate('Reminder', { date })}
            disabled={!date}
          >
            <Text style={[styles.dateText, !date && styles.inactiveDate]}>
              {date || ''}
            </Text>
            {date && <View style={styles.eventDot} />}
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Calendar</Text>
        <View style={styles.dayRow}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <Text key={index} style={styles.day}>{day}</Text>
          ))}
        </View>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {data.map((month, index) => (
          <View key={index} style={styles.monthContainer}>
            <Text style={styles.month}>{month.name}</Text>
            {renderDates(month)}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  header: {
    backgroundColor: '#333333',
    paddingVertical: 10,
  },
  heading: {
    fontSize: 22,
    color: '#ec4444',
    textAlign: 'center',
    fontWeight: '600',
  },
  dayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  day: {
    fontSize: 14,
    fontWeight: '600',
    color: '#bbbbbb',
    width: '14.28%',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingVertical: 10,
  },
  monthContainer: {
    marginBottom: 20,
  },
  month: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginVertical: 10,
    textAlign: 'center',
  },
  week: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderBottomColor: '#444444',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  dateContainer: {
    width: '14.28%',
    alignItems: 'center',
    paddingVertical: 5,
  },
  dateText: {
    color: '#ffffff',
    fontSize: 16,
  },
  inactiveDate: {
    color: '#555555',
  },
  eventDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#888888',
    marginTop: 2,
  },
});

export default CalendarScreen;


// import React, { useEffect, useState } from 'react';
// import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// function CalendarScreen({ navigation }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://10.0.2.2:3000/calendar')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const renderDates = (month) => {
//     const daysInWeek = 7;
//     let weeks = [];
//     let week = [];

//     // Fill the first week with empty slots if the month doesn't start on Sunday
//     for (let i = 0; i < month.startDay; i++) {
//       week.push(null);
//     }

//     // Fill the dates
//     month.dates.forEach((date, index) => {
//       week.push(date);
//       if (week.length === daysInWeek || index === month.dates.length - 1) {
//         weeks.push(week);
//         week = [];
//       }
//     });

//     // Fill the last week with empty slots if it doesn't end on Saturday
//     if (week.length > 0) {
//       while (week.length < daysInWeek) {
//         week.push(null);
//       }
//       weeks.push(week);
//     }

//     return weeks.map((week, index) => (
//       <View key={index} style={styles.week}>
//         {week.map((date, dateIndex) => (
//           <TouchableOpacity
//             key={dateIndex}
//             style={styles.dateContainer}
//             onPress={() => date && navigation.navigate('Reminder', { date })}
//             disabled={!date}
//           >
//             <Text style={[styles.dateText, !date && styles.inactiveDate]}>
//               {date || ''}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     ));
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.heading}>Calendar</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
//             <Text key={index} style={styles.day}>{day}</Text>
//           ))}
//         </ScrollView>
//       </View>
//       <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
//         {data.map((month, index) => (
//           <View key={index}>
//             <Text style={styles.month}>{month.name}</Text>
//             {renderDates(month)}
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1e1e1e',
//   },
//   header: {
//     backgroundColor: '#333333',
//     paddingVertical: 10,
//   },
//   heading: {
//     fontSize: 22,
//     color: '#ffffff',
//     textAlign: 'center',
//     fontWeight: '600',
//   },
//   day: {
//     fontSize: 14,
//     fontWeight: '600',
//     marginHorizontal: 14,
//     color: '#bbbbbb',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollViewContent: {
//     paddingVertical: 10,
//   },
//   month: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#ffffff',
//     marginVertical: 10,
//     textAlign: 'center',
//   },
//   week: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 5,
//     borderBottomColor: '#444444',
//     borderBottomWidth: 1,
//     paddingBottom: 5,
//   },
//   dateContainer: {
//     width: '14.28%',
//     alignItems: 'center',
//     paddingVertical: 5,
//   },
//   dateText: {
//     color: '#ffffff',
//     fontSize: 16,
//   },
//   inactiveDate: {
//     color: '#555555',
//   },
// });

// export default CalendarScreen;


