import React, { Component } from 'react';
import styled from 'styled-components';
import award from '../assets/award_image.png';
const Wrapper = styled.div`
  background: #002487;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);

  padding-bottom: 10px;
  margin-bottom: 10px;
  border-radius: 1%;
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
const Types = styled.div`
  grid-column: 1fr;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const RightColumn = styled.div`
  border-left-style: solid;
  border-color: white;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
`;
export default class AwardsBar extends Component {
  render() {
    return (
      <Wrapper>
        <Types>
          <img className="ui large image" src={award} />
        </Types>
        <RightColumn>
          <Heading>Services Provided</Heading>
          <Paragraph>
            Remodeling, Water Damage Restoration, Kitchens, Bathrooms,
            Additions, Garages, General Repairs, Handyman Services.
          </Paragraph>
          <Heading>Certifications and Awards</Heading>
          <Paragraph>
            EPA/HUD Certified Lead-Safe FirmMember Assoc. of Certified Handyman
            ProfessionalsHomeadvisor.com Listed and Approved - 5 StarsBest of
            Houzz 2014 - 2019
          </Paragraph>
        </RightColumn>
      </Wrapper>
    );
  }
}
