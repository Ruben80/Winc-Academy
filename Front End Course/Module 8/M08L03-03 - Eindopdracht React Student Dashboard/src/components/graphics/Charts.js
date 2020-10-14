import React from "react";
import SelectionInput from "../selectors/SelectionInput";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDifficulty: true,
      ShowJoy: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, state) {
    if (name === "difficult") {
      this.setState(() => {
        return {
          showDifficulty: state,
        };
      });
    } else if (name === "fun") {
      this.setState(() => {
        return {
          ShowJoy: state,
        };
      });
    }
  }

  render() {
    const showDifficulty = (showDifficulty) => {
      if (showDifficulty) {
        return (
          <VictoryBar
            colorScale={"green"}
            alignment="middle"
            data={this.props.studentData}
            x="assignment"
            y="difficult"
          />
        );
      }
    };

    const showJoy = (ShowJoy) => {
      if (ShowJoy) {
        return (
          <VictoryBar
            colorScale={"blue"}
            alignment="end"
            data={this.props.studentData}
            x="assignment"
            y="fun"
          />
        );
      }
    };

    return (
      <div className="Chart">
        <div className="ChartInfo">
          <p className="tough">Moeilijkheid opdracht</p>
          <p className="joy">Plezier in de opdracht</p>
        </div>

        <VictoryChart
          domainPadding={{ x: 17 }}
          className="VictoryChart-BarChart"
          padding={{ left: 30, top: 30, right: 30, bottom: 100 }}
        >
          <VictoryAxis
            tickFormat={this.props.studentData.assigment}
            style={{
              tickLabels: {
                angle: 55,
                textAnchor: "start",
                fontSize: 4,
                fontWeight: "bold",
              },
              ticks: { stroke: "black", size: 5 },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={[1, 2, 3, 4, 5]}
            style={{
              tickLabels: { fontSize: 10 },
              ticks: { stroke: "black", size: 5 },
            }}
          />
          <VictoryGroup offset={13} style={{ data: { width: 8 } }}>
            {showDifficulty(this.state.showDifficulty)}
            {showJoy(this.state.ShowJoy)}
          </VictoryGroup>
        </VictoryChart>

        <div className="SelectionInput">
          <SelectionInput
            selectName={"difficult"}
            selectText={" Moeilijkheidsgraad"}
            selectChange={this.handleChange}
          />
          <br />
          <SelectionInput
            selectName={"fun"}
            selectText={" Plezier in de opdracht"}
            selectChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Charts;
