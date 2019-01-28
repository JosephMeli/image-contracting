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
        <a
          href="https://www.houzz.com/pro/imagecontractingnh/image-contracting"
          target="blank"
        >
          <Comment>{this.props.comment}</Comment>
          <Author>{this.props.author}</Author>
          <ImageWrapper>
            <img src={fiveStar} />
          </ImageWrapper>
        </a>
      </Wrapper>
    );
  }
}
