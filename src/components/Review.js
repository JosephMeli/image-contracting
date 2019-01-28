import React, { Component } from 'react';
import styled from 'styled-components';
import fiveStar from '../assets/five_star.svg';
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1%;
`;
const Comment = styled.h3`
  text-align: center;
`;
const Author = styled.h5`
  text-align: center;
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default class Review extends Component {
  render() {
    return (
      <Wrapper className="ui segment">
        <a href="https://www.houzz.com/pro/imagecontractingnh/image-contracting">
          <Comment>
            John's work is prompt and excellent. He was recommended by my
            realtor. He is very detail and goes beyond "just doing the job." He
            did a cellar wall for us - and we were extremely pleased with his
            high quality work. And he pricing was very fair. Definately will use
            John of Image Contracting for future carpentry work.{' '}
          </Comment>
          <Author> -Stephen Priest</Author>
          <ImageWrapper>
            <img src={fiveStar} />
          </ImageWrapper>
        </a>
      </Wrapper>
    );
  }
}
