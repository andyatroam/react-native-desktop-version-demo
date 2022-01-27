import ElementCards from './examples/element-ui-lib/ElementCards';
import RNElementExample from './examples/element-ui-lib/RNElementExample';
import MoveXY from './examples/animation/MoveXY';
import TodosList from './examples/todo/TodosList';
import WebviewExample from './examples/webview/WebviewExample';
import ColorScheme from './examples/native/ColorScheme';
import InputExample from './examples/element-ui-lib/ElementInputs';

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
  // {title: 'Reanimated', name: 'Reanimated', screen: Reanimated},
];
export default ExampleList;
