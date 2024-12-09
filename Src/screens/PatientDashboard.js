 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PatientDashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Patient Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default PatientDashboard;
