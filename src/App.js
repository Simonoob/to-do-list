import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import About from "./components/pages/About";
import "./App.css";
// import { v4 as uuidv4 } from "uuid";
import Axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    Axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    ).then((response) => this.setState({ todos: response.data }));
  }

  //toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete Todo
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (response) => {
        this.setState({
          todos: this.state.todos.map((todo) => {
            if (todo.id === id) {
              todo.deleted = !todo.deleted;
            }
            return todo;
          }),
        });
        setTimeout(() => {
          this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)],
          });
        }, 200);
      }
    );
  };

  //add Todo
  addTodo = (title) => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
      deleted: false,
    }).then((response) =>
      this.setState({
        todos: [...this.state.todos, response.data],
      })
    );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/home"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
