import React from "react";

import UpcomingEvents from "../events-card/events-card.components";
import { selectEventsSections } from "../../redux/events/events.selector";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const EventsList = ({ events }) => (
  <div className="absolute top-[146rem] flex space-x-12 px-[5.5rem] ">
    {/* Made some adjustments changed ml to px */}
    {events.map(({ id, ...otherEventsProps }) => (
      <UpcomingEvents key={id} {...otherEventsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  events: selectEventsSections,
});

export default connect(mapStateToProps)(EventsList);
