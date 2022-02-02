import {default as React} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  heading: {
    marginVertical: 8,
    // marginHorizontal: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheading: {
    marginVertical: 8,
    // marginHorizontal: 12,
    fontSize: 26,
    fontWeight: 'bold',
  },
  paragraph: {
    marginVertical: 8,
    // marginHorizontal: 18,
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

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#001534',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#b7c9e4',
    fontWeight: 'bold',
  },
});

export const SimpleButton = ({
  handle,
  title,
}: {
  handle: () => void;
  title: string;
}) => {
  return (
    <TouchableOpacity onPress={handle}>
      <View style={buttonStyles.button}>
        <Text style={buttonStyles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
