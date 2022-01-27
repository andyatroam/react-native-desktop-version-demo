import ElementCards from './features/Examples/element-ui/ElementCards';
import RNElementExample from './features/Examples/element-ui/RNElementExample';
import MoveXY from './features/Examples/animation/MoveXY';
import TodosList from './features/Examples/todo/TodosList';
import WebviewExample from './features/Examples/webview/WebviewExample';
import ColorScheme from './features/Examples/native/ColorScheme';
import InputExample from './features/Examples/element-ui/ElementInputs';
import PaperButtons from './features/Examples/paper-ui/PaperButton';
import RNLayoutAnimation from './features/Examples/animation/RNLayoutAnimation';
import AsyncStorageExample from './features/Examples/storage/AsyncStorageExample';

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
  {
    title: 'React Native Element Cards',
    name: 'RNElementCards',
    screen: ElementCards,
  },
  {title: 'Element Input Example', name: 'InputExample', screen: InputExample},
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
