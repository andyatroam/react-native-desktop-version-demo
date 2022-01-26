import Reanimated from './examples/animation/Reanimated';
import RNElementExample from './examples/element-ui-lib/RNElementExample';
import MoveXY from './examples/MoveXY';
import TodosList from './examples/todo/TodosList';
import WebviewExample from './examples/WebviewExample';

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
  {title: 'Simple Animation', name: 'SimpleAnimation', screen: MoveXY},
  {title: 'Webview', name: 'Webview', screen: WebviewExample},
  {title: 'TODO List', name: 'TodosList', screen: TodosList},
  // {title: 'Reanimated', name: 'Reanimated', screen: Reanimated},
];
export default ExampleList;
