import { createSelector } from "reselect";

const selectboxitems = state => state.boxitems

export const selectBoxitemsSections = createSelector(
    [selectboxitems],
    boxitems => boxitems.boxItems
)