import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Pressable } from 'react-native-a11y';

function Button() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Klik</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 8,
    opacity: 1,
    borderColor: 'red',
    alignSelf: 'flex-start',
  },

  text: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 0,
    textAlign: 'center',
    color: '#000',
    fontSize: 17,
    lineHeight: 25,
  },
});

export default Button;
