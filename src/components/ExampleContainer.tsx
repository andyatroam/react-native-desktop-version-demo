import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Heading, Paragraph} from './Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  content: {
    flex: 1,
  },
  footer: {},
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  desc: {
    fontSize: 14,
    marginBottom: 15,
  },
});

function ExampleContainer({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{title}</Text> */}
      <Heading>{title}</Heading>
      {/* <Text style={styles.desc} /> */}
      <Paragraph>{description}</Paragraph>
      <View style={styles.content}>{children}</View>
      {!!footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
}

export default ExampleContainer;
