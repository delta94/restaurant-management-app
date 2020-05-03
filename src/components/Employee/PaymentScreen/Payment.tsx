import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';

const Payment = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Purchase now</Text>
      </TouchableOpacity>
      <View style={styles.part}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>$ 100</Text>
      </View>
      <View style={styles.part}>
        <Text style={styles.text}>Discount</Text>
        <Text style={styles.text}>30%</Text>
      </View>
      <View style={styles.space} />
      <View style={styles.part}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>$ 70</Text>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: normalize(50),
    borderTopRightRadius: normalize(40),
    backgroundColor: '#fbf3f2',
    paddingHorizontal: normalize(30),
    paddingTop: normalize(40),
  },
  button: {
    position: 'absolute',
    backgroundColor: '#ebaaa4',
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(25),
    borderRadius: normalize(20),
    alignSelf: 'center',
    top: -normalize(20),
  },
  buttonText: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(15),
    color: '#b46c4c',
  },
  part: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize(15),
  },
  text: {
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
    color: '#bb817a',
  },
  space: {
    height: 0.5,
    backgroundColor: '#bb817a',
    marginBottom: normalize(15),
  },
});
