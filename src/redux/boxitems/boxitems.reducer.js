const INITIAL_STATE = {
    boxItems: [
        {
          value: "200M",
          description: "National Population NBS, 2022",
          id: 1,
        },
        {
          value: "120M",
          description: "Employment Population NBS, 2022",
          id: 2,
        },
        {
          value: "9.79 %",
          description: "Employment rate Macrotrends, 2022",
          id: 3,
        },
        {
          value: "35,987",
          description: "Number of registered businesses CAC, 2022",
          id: 4,
        },
        {
          value: "43.6%",
          description: "% of working population 18 & older NBS, 2022",
          id: 5,
        },
      ],
}

const boxitemsReducer = (state = INITIAL_STATE, action ) =>{
    switch (action.type) {           
        default:
          return state;
    }
}

export default boxitemsReducer;