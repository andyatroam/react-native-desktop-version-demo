import MoveXY from './animation/RNMovementAnimation';
import RNLayoutAnimation from './animation/RNLayoutAnimation';
import RotationRect from './animation/RNRotationAnimation';
import RNElementExample from './element-ui/ElementUIExample';
import ColorSchemeHook from './native/ColorSchemeHook';
import WindowDimensionHook from './native/WindowDimensionsHook';
import PaperButtons from './paper-ui/PaperUIExamples';
import AsyncStorageExample from './storage/AsyncStorageExample';
import TodosList from './request/TodosList';
import WebviewExample from './webview/WebviewExample';

export interface ExampleItemData {
  title: string;
  screen: any;
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
  {title: 'Webview ', screen: WebviewExample},
  {title: 'OS color scheme', screen: ColorSchemeHook},
  {
    title: 'Window dimension ',
    screen: WindowDimensionHook,
  },
  {title: 'Simple movement animation', screen: MoveXY},
  {
    title: 'Rotation animation',

    screen: RotationRect,
  },
  {
    title: 'Layout animation',
    screen: RNLayoutAnimation,
  },

  {title: 'Simple data fetching', screen: TodosList},
  {
    title: 'AsyncStorage example',
    screen: AsyncStorageExample,
  },
];
export default ExampleList;
