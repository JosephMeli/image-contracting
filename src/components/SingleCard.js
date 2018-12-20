import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 8em 0em;
`;
const Heading = styled.h3`
  font-size: 2em;
`;
const Paragraph = styled.p`
  font-size: 1.33em;
`;
class SingleCard extends Component {
  render() {
    return (
      <Wrapper className="ui  vertical segment">
        <div className="ui container stackable middle aligned grid">
          <div className="row">
            <div className="eight wide column">
              <Heading className="ui  header">Services Provided</Heading>
              <Paragraph>
                Remodeling, Water Damage Restoration, Kitchens, Bathrooms,
                Additions, Garages, General Repairs, Handyman Services.
              </Paragraph>
              <Heading className="ui  header">
                Certifications and Awards EPA/HUD Certified Lead-Safe FirmMember
              </Heading>
              <Paragraph>
                Assoc. of Certified Handyman ProfessionalsHomeadvisor.com Listed
                and Approved - 5 StarsBest of Houzz 2014 - 2018
              </Paragraph>
            </div>
            <div className="right floated six wide column">
              <img
                src="/images/wireframe/white-image.png"
                className="ui large bordered rounded image"
                alt="some_image"
              />
            </div>
          </div>
          <div className="row">
            <div className="center aligned column">
              <button className="ui huge button">Check Them Out</button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default SingleCard;
