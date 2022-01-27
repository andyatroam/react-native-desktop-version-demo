import React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  heading: {
    // paddingHorizontal: 20,
    marginVertical: 20,
    fontSize: 32,
    fontWeight: 'bold',
  },
  paragraph: {
    // paddingHorizontal: 20,
    marginVertical: 20,
    fontSize: 16,
  },
});

export const Heading = ({children}: {children: React.ReactNode}) => {
  return <Text style={styles.heading}>{children}</Text>;
};

export const Paragraph = ({children}: {children: React.ReactNode}) => {
  return <Text style={styles.paragraph}>{children}</Text>;
};
