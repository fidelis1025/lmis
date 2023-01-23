import React from "react";
import Box from "../box/box.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectBoxitemsSections } from "../../redux/boxitems/boxitems.selector";

const InfoBox = ({boxItems}) => (
  <div className="absolute left-[9rem] top-[41rem] flex space-x-4">
    {boxItems.map(({ id, ...otherBoxItems }) => (
      <Box key={id} {...otherBoxItems} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  boxItems: selectBoxitemsSections,
});

export default connect(mapStateToProps)(InfoBox);
