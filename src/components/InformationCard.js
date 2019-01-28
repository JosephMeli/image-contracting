import React, { Component } from 'react';
import styled from 'styled-components';

import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import houzz from '../assets/houzz.png';

const Wrapper = styled.div`
  background: #002487;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  text-align: center;
  margin-bottom: 10px;
  border-radius: 1%;
`;

const Types = styled.div`
  grid-column: 1fr;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const SubTypes = styled.div`
  grid-row: row;
`;

const ContactColumn = styled.div`
  border-left-style: solid;
  border-color: white;
  grid-template-rows: repeat(3, 1fr);
`;
const Heading = styled.h3`
  font-size: 2em;
  color: white;
  padding-bottom: 10px;
  padding-right: 5px;
`;

const Image = styled.img`
  height: 48px;
  width: 48px;
  padding-bottom: 10px;
`;

export default class InformationCard extends Component {
  render() {
    return (
      <Wrapper>
        <Types>
          <SubTypes>
            <Heading>General Contractor</Heading>
          </SubTypes>

          <SubTypes>
            <Heading>Specialty Contractor</Heading>
          </SubTypes>
          <SubTypes>
            <Heading>Home and Commercial</Heading>
          </SubTypes>
        </Types>
        <ContactColumn>
          <div>
            <Heading> (603) 716-1522</Heading>
          </div>

          <SubTypes>
            <a
              href="https://www.facebook.com/imagecontractingnh/"
              target="blank"
            >
              <Image src={facebook} />
            </a>
            <a href="_">
              <Image src={instagram} />
            </a>

            <a
              href="https://www.houzz.com/pro/imagecontractingnh/image-contracting"
              target="blank"
            >
              <Image src={houzz} />
            </a>
          </SubTypes>
          <div>
            <Heading>PO Box 10145 Bedford, NH 03110</Heading>
          </div>
          <SubTypes>
            <Heading>info@imagepropertysolutions.com</Heading>
          </SubTypes>
        </ContactColumn>
      </Wrapper>
    );
  }
}
