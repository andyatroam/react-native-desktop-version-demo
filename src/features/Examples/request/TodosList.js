import React, {Component} from 'react';
import {ActivityIndicator, View, FlatList, Text} from 'react-native';
import ExampleContainer from '../../../components/ExampleContainer';
import TodoItem from './TodoItem';

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [], loading: false};
  }

  componentDidMount = async () => {
    this.setState({loading: true});
    var result = await fetch('https://jsonplaceholder.typicode.com/todos/');
    var json = await result.json();
    console.log(json);

    this.setState({todos: json.slice(1, 20), loading: false});
  };

  render() {
    return (
      <ExampleContainer
        title="Simple fetch data"
        description="Use simple fetch function to load json data from internet">
        <ActivityIndicator size="large" animating={this.state.loading} />
        <FlatList
          data={this.state.todos}
          style={{height: 150}}
          renderItem={({item}) => <TodoItem title={item.title} />}
          keyExtractor={item => item.id.toString()}
        />
      </ExampleContainer>
    );
  }
}

export default TodosList;
