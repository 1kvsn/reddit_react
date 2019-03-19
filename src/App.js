import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import View from './View';
import Posts from './Posts';
import Sidebar from './Sidebar';

//needs to be rendered.

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <View />
        <Posts />
      </div>
    );
  }
}

