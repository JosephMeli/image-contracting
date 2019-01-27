import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: [col] 390px auto;
  grid-gap: 10px;
`;
const LogoWrapper = styled.div`
  grid-column: col;
  padding-left: 90px;
`;

const FixSloganLayout = styled.div`
  position: relative;
  text-align: center;
  padding-left: 10px;
`;
const Slogan = styled.h1`
  font-family: 'Charm', cursive;
  color: black;
  letter-spacing: 2px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  grid-column: col 2;
`;
class Banner extends Component {
  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <img src={logo} className="ui  large image" alt="some_image" />
        </LogoWrapper>
        <FixSloganLayout>
          <Slogan>Flawless Results. Every Project. Every Time.</Slogan>
        </FixSloganLayout>
      </Wrapper>
    );
  }
}
export default Banner;
