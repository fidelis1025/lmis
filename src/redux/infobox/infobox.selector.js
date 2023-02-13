import { createSelector } from "reselect";

const selectinfobox = state => state.infobox

export const selectinfoboxSections = createSelector(
    [selectinfobox],
    infobox => infobox.infoBoxes
)