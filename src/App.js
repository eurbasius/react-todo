import "./App.css";
import React from "react";
import todosList from "./Todos";
import Todo from "./Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: todosList };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });

      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todo = this.state.todos.map((item) => (
      <Todo key={item.id} todo={item} handleChange={this.handleChange} />
    ));
    return <div className="App">{todo}</div>;
  }
}

export default App;
