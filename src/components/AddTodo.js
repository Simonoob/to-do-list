import React, { Component } from "react";
import propTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  modify = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "1rem",
          paddingLeft: "1.5rem",
          marginBottom: "1.7rem",
        }}
        onSubmit={this.submit}
      >
        <input
          type="text"
          name="title"
          placeholder="add Todo ..."
          style={{ marginRight: "1rem" }}
          value={this.state.title}
          onChange={this.modify}
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-large green"
          style={{ marginRight: ".5rem" }}
        />
      </form>
    );
  }
}

//PropTypes
AddTodo.propTypes = {
  todo: propTypes.object.isRequired,
  markComplete: propTypes.func.isRequired,
  addTodo: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired,
};

export default AddTodo;
