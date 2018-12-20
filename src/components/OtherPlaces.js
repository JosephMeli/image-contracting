import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  left: 800px;
  transition: left 0.5s ease 0s;
`;
export default class OtherPlaces extends Component {
  render() {
    return (
      <Wrapper className="ui vertical labeled icon menu">
        <div className="item">
          <i aria-hidden="true" className="twitter icon" />
          Twitter
        </div>
        <div className="item">
          <i aria-hidden="true" className="facebook icon" />
          Share
        </div>
        <div className="item">
          <i aria-hidden="true" className="mail icon" />
          Email
        </div>
      </Wrapper>
    );
  }
}
