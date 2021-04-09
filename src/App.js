import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Title from "./components/Title";
import Nav from "./components/Nav";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Title />
        <Nav />
        <Router className="content">
          {/* <Home path="/" /> */}
          <ArticlesList path="/" />
          <ArticlesList path="/:topic/articles" />
        </Router>
      </div>
    );
  }
}

export default App;
