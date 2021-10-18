import React from "react";
import "./Todo.css";
class Todo extends React.Component {
  render() {
    return (
      <div className="Todo">
        <label className="Todo-label">
          <p className="Todo-task">{this.props.todo.task}</p>
          <input
            className="Todo-checkbox"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChange(this.props.todo.id)}
          />
        </label>
      </div>
    );
  }
}

export default Todo;
