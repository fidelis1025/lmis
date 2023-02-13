import { createSelector } from "reselect";

const selectEvents = state => state.events

export const selectEventsSections = createSelector(
    [selectEvents],
    events => events.events
)
