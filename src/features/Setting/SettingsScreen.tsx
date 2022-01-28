import React from 'react';
import {Text} from 'react-native';
import ScreenContent from '../../components/PageContainer';

const SettingsScreen = () => {
  return (
    <ScreenContent
      title="Settings"
      content={<Text>This is the tab inner view</Text>}
    />
  );
};

export default SettingsScreen;
