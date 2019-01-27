import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #002487;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  text-align: justify;
  margin-bottom: 10px;
  border-radius: 1%;
`;
const Heading = styled.h3`
  font-size: 2em;
  color: white;
  padding-bottom: 10px;
  padding-right: 5px;
`;

const Paragraph = styled.p`
  font-size: 1.3em;
  color: white;
`;
const Types = styled.div`
  grid-column: 1fr;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export default class AwardsBar extends Component {
  render() {
    return (
      <Wrapper>
        <Types>
          <Heading>Services Provided</Heading>
          <Paragraph>
            Remodeling, Water Damage Restoration, Kitchens, Bathrooms,
            Additions, Garages, General Repairs, Handyman Services.
          </Paragraph>
          <Heading>
            Certifications and Awards EPA/HUD Certified Lead-Safe FirmMember
          </Heading>
          <Paragraph>
            Assoc. of Certified Handyman ProfessionalsHomeadvisor.com Listed and
            Approved - 5 StarsBest of Houzz 2014 - 2018
          </Paragraph>
        </Types>
      </Wrapper>
    );
  }
}
