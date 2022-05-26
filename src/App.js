import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    // this.setProgress(10);
    return (
      <>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  key="home"
                  numberOfItems={this.pageSize}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  key="business"
                  numberOfItems={this.pageSize}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  key="entertainment"
                  numberOfItems={this.pageSize}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  apiKey={this.apiKey}
                  key="general"
                  numberOfItems={this.pageSize}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  key="health"
                  numberOfItems={this.pageSize}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  key="science"
                  numberOfItems={this.pageSize}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  key="sports"
                  numberOfItems={this.pageSize}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  apiKey={this.apiKey}
                  key="technology"
                  numberOfItems={this.pageSize}
                  category="technology"
                />
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
