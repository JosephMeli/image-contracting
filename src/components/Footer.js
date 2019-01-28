import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;

  background-color: #1b1c1d;
  color: grey;
  grid-template-columns: [col] 250px [col] 250px [col] auto;
  grid-template-rows: [row] 180px [row] auto;
  border-radius: 1%;
  padding-left: 10px;
  padding-bottom: 10px;
  -webkit-filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.8));
`;

const Payment = styled.div`
  margin-top: 10px;
  border-color: grey;
  grid-column: col 1;
  grid-row: row 1;
  text-align: center;
`;
const Social = styled.div`
  margin-top: 10px;
  text-align: center;
  border-left-style: solid;
  border-color: white;
  grid-column: col 2;
  grid-row: row 1;
`;

const Bonus = styled.div`
  margin-top: 10px;
  border-left-style: solid;
  border-color: white;
  grid-row: row 1;
  grid-column: col 3;
  text-align: center;
`;
const Heading = styled.h3`
  margin: 0;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  color: grey;
`;
const Paragraph = styled.p`
  margin: 0;
  padding-top: 10px;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 1em;
  color: grey;
`;

const Links = styled.a`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Payment>
          <Heading>Accepted Payment</Heading>

          <Paragraph>Master Card</Paragraph>
          <Paragraph>American Express</Paragraph>
          <Paragraph>Discover Card</Paragraph>
          <Paragraph>Visa Card</Paragraph>
        </Payment>

        <Social>
          <Heading>Social Connections</Heading>
          <Links
            href="https://www.facebook.com/imagecontractingnh/"
            target="blank"
          >
            <Paragraph>Facebook</Paragraph>
          </Links>
          <Links href="_">
            <Paragraph>Instagram</Paragraph>
          </Links>
          <Links
            href="https://www.houzz.com/pro/imagecontractingnh/image-contracting"
            target="blank"
          >
            <Paragraph>Houzz</Paragraph>
          </Links>
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
      </Wrapper>
    );
  }
}
