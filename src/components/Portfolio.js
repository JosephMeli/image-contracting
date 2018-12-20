import React, { Component } from 'react';
import Projects from './Projects';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="ui doubling stackable four column grid">
        {/*
        Pass 
        * the Before  image URL 
        * The after image URL
        * description 
        * link to houzz page
        by props 
        */}
        <Projects />
      </div>
    );
  }
}
