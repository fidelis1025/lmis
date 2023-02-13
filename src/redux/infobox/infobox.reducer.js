import image2 from "../../images/pexels-markus-spiske.png";
import image3 from "../../images/unsplash_AT77Q0Njnt0-2.png";

const INITIAL_STATE = {
    infoBoxes: [
        {
            heading: "Recent Publications",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod.",
            image: image2,
            background:"[#FBFBFB]",
            flex: "row",
            id: 1
        },
        {
            heading: "Latest News",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod.",
            image: image3,
            background:"[#FFFFFF]",
            flex: "row-reverse",
            id: 2
        }
    ]
}

const infoboxReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default infoboxReducer