import React from 'react';
import RNLayoutAnimation from './animation/RNLayoutAnimation';
import RNMovementAnimation from './animation/RNMovementAnimation';
import RotationRect from './animation/RNRotationAnimation';
import RNElementExample from './element-ui/ElementUIExample';
import ColorSchemeHook from './native/ColorSchemeHook';
import Netinfo from './native/Netinfo';
import WindowDimensionHook from './native/WindowDimensionsHook';
import PaperButtons from './paper-ui/PaperUIExamples';
import PickerExamples from './picker/Picker';
import TodoList from './request/TodoList';
import AsyncStorageExample from './storage/AsyncStorageExample';
import WebviewExample from './webview/WebviewExample';

type TestResult = 'Good' | 'Bad' | 'Not test yet';
export interface ExampleItemData {
  title: string;
  screen: React.ReactNode;
  result?: {
    ios: TestResult;
    macos: TestResult;
    android: TestResult;
    windows: TestResult;
  };
}

const ExampleList: ExampleItemData[] = [
  {
    title: 'React Native Element UI library',
    screen: RNElementExample,
  },
  {
    title: 'React Native Paper UI library',
    screen: PaperButtons,
  },
  {
    title: 'Webview ',
    screen: WebviewExample,
  },
  {
    title: 'OS color scheme',
    screen: ColorSchemeHook,
  },
  {
    title: 'Window dimension ',
    screen: WindowDimensionHook,
  },
  {
    title: 'Simple movement animation',
    screen: RNMovementAnimation,
  },
  {
    title: 'Rotation animation',

    screen: RotationRect,
  },
  {
    title: 'Layout animation',
    screen: RNLayoutAnimation,
  },

  {
    title: 'Simple data fetching',
    screen: TodoList,
  },
  {
    title: 'AsyncStorage example',
    screen: AsyncStorageExample,
  },
  {
    title: 'Picker',
    screen: PickerExamples,
  },
  {
    title: 'Netinfo test',
    screen: Netinfo,
  },
];
export default ExampleList;
