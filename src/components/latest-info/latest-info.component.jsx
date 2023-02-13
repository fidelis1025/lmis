import React from "react";

import LatestInfobox from "../latest-infobox/latest-infobox.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectinfoboxSections } from "../../redux/infobox/infobox.selector";

const LatestInfo = ({ infoBoxes }) => (
  <div className="absolute top-[90rem]">
    {infoBoxes.map(({ id, ...otherInfoBoxes }) => (
      <LatestInfobox key={id} {...otherInfoBoxes} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  infoBoxes: selectinfoboxSections,
});

export default connect(mapStateToProps)(LatestInfo);
