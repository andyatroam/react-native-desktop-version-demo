import React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  heading: {
    marginVertical: 16,
    fontSize: 32,
    fontWeight: 'bold',
  },
  subheading: {
    marginVertical: 20,
    fontSize: 26,
    fontWeight: 'bold',
  },
  paragraph: {
    marginVertical: 8,
    fontSize: 16,
  },
});

export const Heading = ({children}: {children: React.ReactNode}) => {
  return <Text style={styles.heading}>{children}</Text>;
};

export const Subheading = ({children}: {children: React.ReactNode}) => {
  return <Text style={styles.subheading}>{children}</Text>;
};

export const Paragraph = ({children}: {children: React.ReactNode}) => {
  return <Text style={styles.paragraph}>{children}</Text>;
};
