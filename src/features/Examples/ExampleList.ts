import MoveXY from './animation/MoveXY';
import RNLayoutAnimation from './animation/RNLayoutAnimation';
import RotationRect from './animation/RotationRect';
import RNElementExample from './element-ui/ElementUIExample';
import ColorSchemeHook from './native/ColorSchemeHook';
import WindowDimensionHook from './native/WindowDimensionsHook';
import PaperButtons from './paper-ui/PaperUIExamples';
import AsyncStorageExample from './storage/AsyncStorageExample';
import TodosList from './request/TodosList';
import WebviewExample from './webview/WebviewExample';

export interface ExampleItemData {
  title: string;
  name: string;
  screen: any;
}

const ExampleList: ExampleItemData[] = [
  {
    title: 'React Native Element UI',
    name: 'ReactNativeElementUI',
    screen: RNElementExample,
  },
  {
    title: 'React Native Paper UI',
    name: 'ReactNativePaperUI',
    screen: PaperButtons,
  },
  // {
  //   title: 'React Native Element Cards',
  //   name: 'RNElementCards',
  //   screen: ElementCards,
  // },
  // {title: 'Element Input Example', name: 'InputExample', screen: InputExample},
  {title: 'Simple Animation', name: 'SimpleAnimation', screen: MoveXY},

  {
    title: 'Rotation Animation',
    name: 'RotationAnimation',
    screen: RotationRect,
  },
  {title: 'Webview', name: 'Webview', screen: WebviewExample},
  {title: 'Simple data fetching', name: 'TodosList', screen: TodosList},
  {title: 'Color Scheme', name: 'ColorSchemeHook', screen: ColorSchemeHook},
  {
    title: 'WindowDimensionHook',
    name: 'WindowDimensionHook',
    screen: WindowDimensionHook,
  },
  {
    title: 'RNLayoutAnimation',
    name: 'RNLayoutAnimation',
    screen: RNLayoutAnimation,
  },
  {
    title: 'AsyncStorageExample',
    name: 'AsyncStorageExample',
    screen: AsyncStorageExample,
  },
];
export default ExampleList;
