import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 8em;
`;
export default class Projects extends Component {
  render() {
    return (
      <Wrapper className="ui card">
        <div className="ui slide left reveal image">
          <div className="visible content">
            <img
              className="ui fluid image"
              src="https://st.hzcdn.com/simgs/9f01b80603d59174_8-5338/traditional-deck.jpg"
              alt="after"
            />
          </div>
          <div className="hidden content">
            <img
              className="ui fluid image"
              src="https://st.hzcdn.com/simgs/99616d5603d57efb_8-0611/traditional-deck.jpg"
              alt="before"
            />
          </div>
        </div>
        <div className="content">
          <p>
            Client had a large mahogany deck on the rear of their home. A screen
            porch had been built on top of that, leaving part of the deck open
            along with the stairs. This open deck was in extremely rough shape
            from years without refinishing. They wanted to replace the open
            portion with all composite materials. No maintenance, no rot,
            enduring beauty. They chose Trex (R) composite decking systems. The
            deck surface is Trenscend Lava Rock, the railings are Transcend
            Vintage Lantern and the posts are white. They also chose the hidden
            fastener system for a clean look with minimal visible fasteners in
            the decking surface.
          </p>
        </div>
      </Wrapper>
    );
  }
}
