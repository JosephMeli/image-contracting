import React, { Component } from 'react';

import styled from 'styled-components';
const Wrapper = styled.div`
  padding-bottom: 5em;
  padding-top: 5em;
`;
const Heading = styled.h3`
  font-size: 2em;
`;
const Paragraph = styled.p`
  font-size: 1.33em;
`;
export default class Opcard extends Component {
  render() {
    return (
      <div className=" ui  center aligned row">
        <Wrapper className="column">
          <Heading className="ui  header">"What a Company"</Heading>
          <Paragraph>That is what they all say about us</Paragraph>
        </Wrapper>
        <Wrapper className="column">
          <Heading className="ui  header">
            "I shouldn't have gone with their competitor."
          </Heading>
          <Paragraph>
            <img
              src="/images/avatar/large/nan.jpg"
              className="ui avatar image"
              alt="another"
            />
            <b>Nan</b> Chief Fun Officer Acme Toys
          </Paragraph>
        </Wrapper>
      </div>
    );
  }
}
