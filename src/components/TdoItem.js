import React, { Component } from "react";
import PropTypes from "prop-types";
class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      opacity:
        this.props.todo.completed || this.props.todo.deleted ? "0.3" : "1",
      transition: ".2s all ease-in-out",
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p className="flow-text" style={pStyle}>
          <button
            className="btn green white-text waves-effect waves-light"
            style={checkBoxStyle}
            onClick={this.props.markComplete.bind(this, id)}
          >
            COMPLETED
          </button>{" "}
          {title}
          <button
            className="btn red waves-effect waves-light"
            style={btnStyle}
            onClick={this.props.delTodo.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

let pStyle = {
  padding: "1rem",
};

const checkBoxStyle = {
  border: "none",
  outline: "none",
  marginRight: "1rem",
};

const btnStyle = {
  float: "right",
};

export default TodoItem;
