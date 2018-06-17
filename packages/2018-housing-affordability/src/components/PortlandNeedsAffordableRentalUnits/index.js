import React from 'react';

import { CivicStoryCard, Placeholder } from '@hackoregon/component-library';

export class PortlandNeedsAffordableRentalUnits extends React.Component {
  componentDidMount() {
    // initialize data here
  }

  render() {
    return (
      <CivicStoryCard
        title="Portland Needs Affordable Rental Units"
        slug="portland-needs-affordable-rental-units"
      >
        <Placeholder issue="55" />
      </CivicStoryCard>
    );
  }
}

PortlandNeedsAffordableRentalUnits.displayName = 'PortlandNeedsAffordableRentalUnits';

// Connect this to the redux store when necessary
export default PortlandNeedsAffordableRentalUnits;
