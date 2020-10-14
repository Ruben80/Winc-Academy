import React from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

class Graphics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Graph">
        <div className="GraphInfo">
          <p className="avgAll">Gemiddeld cijfer van alle studenten</p>
          <p className="avgStudent">Gemiddeld cijfer huidige student</p>
        </div>

        <VictoryChart padding={{ left: 30, top: 30, right: 50, bottom: 100 }}>
          <VictoryAxis
            tickFormat={this.props.avgStudent.assigment}
            style={{
              tickLabels: {
                angle: 55,
                textAnchor: "start",
                fontSize: 4,
                fontWeight: "bold",
              },
              ticks: { stroke: "lightgrey", size: 5 },
              grid: { stroke: "rgb(221, 221, 221)" },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={[0, 1, 2, 3, 4, 5]}
            style={{
              tickLabels: { fontSize: 10 },
              ticks: { stroke: "black", size: 5 },
              grid: { stroke: "rgb(221, 221, 221)" },
            }}
          />
          <VictoryLine
            style={{
              data: { stroke: "#004B8F" },
              parent: { border: "1px solid #ccc" },
            }}
            data={this.props.avgStudent}
            x="assignment"
            y="average"
          />
          <VictoryLine
            style={{
              data: { stroke: "#354722" },
            }}
            data={this.props.avgAll}
            x="assignment"
            y="average"
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Graphics;
