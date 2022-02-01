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
    marginBottom: 12,
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
      <Heading>{title}</Heading>
      {!!description && <Paragraph>{description}</Paragraph>}
      <View style={styles.content}>{children}</View>
      {!!footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
}

const sectionStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'column',
    // alignItems: 'center',
  },
  desc: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

function ExampleSection({
  description,
  children,
}: {
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <View style={sectionStyles.container}>
      {!!description && <Text style={sectionStyles.desc}>{description}</Text>}
      <View>{children}</View>
    </View>
  );
}

export default ExampleContainer;
export {ExampleSection};
