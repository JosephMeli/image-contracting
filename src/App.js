import React, { Component } from 'react';
import styled from 'styled-components';

import Banner from './components/Banner';
import InformationCard from './components/InformationCard';
import Footer from './components/Footer';
import AwardsBar from './components/AwardsBar';

const Main = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 40px;
  width: 70%;

  border-radius: 1%;
  border: none;
  animation: 0.5s forwards;
`;

class App extends Component {
  render() {
    return (
      <Main className="App">
        <div className="ui segment">
          <Banner />
        </div>
        <InformationCard />
        <AwardsBar />
        <Footer />
      </Main>
    );
  }
}

export default App;
