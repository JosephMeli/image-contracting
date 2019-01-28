import React, { Component } from 'react';
import styled from 'styled-components';

import Banner from './components/Banner';
import InformationCard from './components/InformationCard';
import Footer from './components/Footer';
import AwardsBar from './components/AwardsBar';
import Review from './components/Review';

const Main = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 40px;
  width: 70%;

  border-radius: 1%;
  border: none;
  animation: 0.5s forwards;
`;

const SP =
  'John\'s work is prompt and excellent. He was recommended by my realtor. He is very detail and goes beyond "just doing the job." He did a cellar wall for us - and we were extremely pleased with his high quality work. And he pricing was very fair. Definately will use John of Image Contracting for future carpentry work.';
const IN =
  'John has worked with us on quite a few projects. His craftsmanship and his attention to detail is impeccable! We have loved working with John and Image Contracting, on our own projects, as well as projects for our clients. We are quite pleased with all of the work we have done with him, from communication to end of day clean-up to the final installation, everything was well run and well constructed. We definitely look forward to working with him again in the future!';
class App extends Component {
  render() {
    return (
      <Main className="App">
        <div className="ui segment">
          <Banner />
        </div>

        <InformationCard />
        <Review comment={SP} author="-Stephen Priest" />
        <AwardsBar />
        <Review comment={IN} author="- Impeccable Nest" />
        <Footer />
      </Main>
    );
  }
}

export default App;
