import React, { Component } from 'react';
import styled from 'styled-components';
import Jon from '../assets/Jon_profile.jpeg';
import logo from '../assets/logo.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: [col] 300px 2fr 1fr;
  grid-gap: 10px;
`;
const LogoWrapper = styled.div`
  grid-column: col;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Paragraph = styled.h1`
  font-family: 'Chivo', sans-serif;
  color: #002487;
  text-align: center;
`;

const FixSloganLayout = styled.div`
  position: relative;
  text-align: center;
  padding-left: 10px;
  grid-column: 2fr;
`;
const ProfileWrap = styled.div`
  grid-column: 1fr;
  padding-top: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Slogan = styled.h1`
  font-family: 'Charm', cursive;
  color: black;
  letter-spacing: 2px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

class Banner extends Component {
  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <img src={logo} className="ui  large image" alt="Logo" />
        </LogoWrapper>
        <FixSloganLayout>
          <Slogan>Flawless Results. Every Project. Every Time.</Slogan>
        </FixSloganLayout>
        <ProfileWrap>
          <img className="ui  small image" src={Jon} alt="John" />
          <Paragraph>John Harding</Paragraph>
        </ProfileWrap>
      </Wrapper>
    );
  }
}
export default Banner;
