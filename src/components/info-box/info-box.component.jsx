import React from "react";

class InfoBox extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [
        {
          value: "200M approximately",
          description: "National Population NBS, 2022",
          id: 1,
        },
        {
          value: "120M approximately",
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
    };
  }
}


export default InfoBox;
