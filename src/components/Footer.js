import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  background-color: #1b1c1d;
  color: white;
  grid-template-columns: [col] 200px [col] 200px [col] auto;
  grid-template-rows: [row] 100px [row] auto;
  margin-bottom: 10px;
  padding: 50px;
`;

const Powered = styled.div`
  grid-column: col 3;
  grid-row: row 2;
  padding-top: 25px;
`;

const Payment = styled.div`
  border-color: white;
  grid-column: col 1;
  grid-row: row 1;
`;
const Social = styled.div`
  text-align: center;
  border-left-style: solid;
  border-color: white;
  grid-column: col 2;
  grid-row: row 1;
`;

const Bonus = styled.div`
  border-left-style: solid;

  border-color: white;
  grid-row: row 1;
  grid-column: col 3;
  text-align: center;
  padding: 10px;
`;
const Heading = styled.h3`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  color: white;
`;
const Paragraph = styled.h6`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 1em;
  color: white;
`;

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Payment>
          <Heading>Payment Options</Heading>
        </Payment>

        <Social>
          <Heading>Social Connections</Heading>
        </Social>
        <Bonus>
          <Heading>Areas Served</Heading>
          <Paragraph>
            Amherst, Auburn, Bedford, Derry, East Merrimack, Goffstown,
            Hooksett, Litchfield, Londonderry, Manchester, Merrimack, Milford,
            Mont Vernon, Nashua, New Boston, Pinardville, Portsmouth, South
            Hooksett, Weare, Southern NH and Northern MA
          </Paragraph>
        </Bonus>
        <Powered> Powered by Joseph Meli</Powered>
      </Wrapper>
    );
  }
}
