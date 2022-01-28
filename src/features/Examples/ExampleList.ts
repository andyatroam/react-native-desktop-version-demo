import MoveXY from './animation/MoveXY';
import RNLayoutAnimation from './animation/RNLayoutAnimation';
import RNElementExample from './element-ui/RNElementExample';
import ColorScheme from './native/ColorScheme';
import PaperButtons from './paper-ui/PaperButton';
import AsyncStorageExample from './storage/AsyncStorageExample';
import TodosList from './todo/TodosList';
import WebviewExample from './webview/WebviewExample';

export interface ExampleItemData {
  title: string;
  name: string;
  screen: any;
}

const ExampleList: ExampleItemData[] = [
  {
    title: 'React Native Element UI',
    name: 'RNElementUI',
    screen: RNElementExample,
  },
  // {
  //   title: 'React Native Element Cards',
  //   name: 'RNElementCards',
  //   screen: ElementCards,
  // },
  // {title: 'Element Input Example', name: 'InputExample', screen: InputExample},
  {title: 'Simple Animation', name: 'SimpleAnimation', screen: MoveXY},
  {title: 'Webview', name: 'Webview', screen: WebviewExample},
  {title: 'TODO List', name: 'TodosList', screen: TodosList},
  {title: 'Color Scheme', name: 'ColorScheme', screen: ColorScheme},
  {title: 'PaperButtons', name: 'PaperButtons', screen: PaperButtons},
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
