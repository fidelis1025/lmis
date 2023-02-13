import image4 from "../../images/pexels-cottonbro.png";
import image5 from "../../images/unsplash_sbQqtp_lCxk.png";
import image6 from "../../images/unsplash_xEy9QNUCdRI.png";
import image7 from "../../images/unsplash_CXKk4zU7anE.png";

const INITIAL_STATE = {
    events: [
        {
            image: image4,
            date: "Aug 31, 2022",
            title: "Eco Volunteering Walk",
            state: "Enugu State",
            id: 1
        },
        {
            image: image5,
            date: "Sep 10, 2022",
            title: "Creativity and Knowlegde Conference",
            state: "Lagos State",
            id: 2
        },
        {
            image: image6,
            date: "Sep 12, 2022",
            title: "WOLEX Skills Acquisition Training",
            state: "Anambra State",
            id: 3
        },
        {
            image: image7,
            date: "Sep 20, 2022",
            title: "Ministry of Agriculture Farmers development",
            state: "Kebbi State",
            id: 4
        },
    ],
}

const eventsReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {    
        default:
           return state;
    }
}

export default eventsReducer;