import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Heading} from './Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  content: {
    flex: 1,
  },
  footer: {},
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

function ScreenContent({
  title,
  content,
  footer,
}: {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      <Heading>{title}</Heading>
      <View style={styles.content}>{content}</View>
      {!!footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
}

export default ScreenContent;
