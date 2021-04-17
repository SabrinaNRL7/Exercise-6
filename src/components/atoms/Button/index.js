import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const IndexButton = ({label, onSubmit}) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IndexButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C238CE',
    borderRadius: 20,
    paddingVertical: 10,
  },

  labelButton: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    fontFamily: 'roboto',
  },
});