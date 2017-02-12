import React, {Component} from 'react';
import {Header} from './components/Header/Header';
import {Home} from './components/Home/Home';
import {Footer} from './components/Footer/Footer';

export default class Main extends React.Component {
  render() {
    return (
      <div>
				<h1>Main</h1>
        <Header/>
        <Home/>
        <Footer/>
				<main>
					{this.props.children}
				</main>
      </div>
    );
  }
}
