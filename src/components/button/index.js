import React from 'react';
import {Text, Pressable} from 'react-native';
import {StyleSheet} from 'react-native';

function Button() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Klik</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: (style, backgroundColor) => ({
    backgroundColor,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 8,
    opacity: 1,
    borderColor: '#ccc',
    alignSelf: 'flex-start',
    ...style,
  }),

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
