// Main component file
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CenteredTextWithBoxes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teks di Tengah Layar</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Light gray background
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, // Add some space between the text and boxes
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: 'red', // Example color for box 1
  },
  box2: {
    backgroundColor: 'green', // Example color for box 2
  },
});

export default CenteredTextWithBoxes;
