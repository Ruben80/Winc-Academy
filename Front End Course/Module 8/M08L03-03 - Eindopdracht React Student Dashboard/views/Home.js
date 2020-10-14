import React from "react";
import Chart from "../components/graphics/Charts";
import StudentSelection from "../components/selectors/StudentSelection";

class Home extends React.Component {
  constructor(props) {
    super(props);

    const studenten = props.studenten.map((item) => {
      return {
        name: item,
        state: true,
      };
    });

    this.state = {
      studenten: studenten,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, state) {
    this.setState((prevState) => {
      const studenten = prevState.studenten.map((item) => {
        if (item.name === name) {
          return {
            name: item.name,
            state: state,
          };
        }
        return item;
      });
      return {
        studenten: studenten,
      };
    });
  }

  avgData(studentData) {
    const avgData = [];
    let filterItemId = 1;
    studentData.forEach((studentItem) => {
      const data = avgData.find((filterItem) => {
        return studentItem.assignment === filterItem.assignment;
      });
      if (data === undefined) {
        const avgDifficult = this.avgDifficulty(
          studentData,
          studentItem.assignment
        );
        const avgJoy = this.avgJoy(studentData, studentItem.assignment);
        avgData.push({
          id: filterItemId++,
          name: "average",
          assignment: studentItem.assignment,
          difficult: avgDifficult,
          fun: avgJoy,
        });
      }
    });
    return avgData;
  }

  filteredData() {
    const filteredData = this.props.studentData.filter((studentDataItem) => {
      const student = this.state.studenten.find((studentItem) => {
        return studentItem.name === studentDataItem.name;
      });
      return student !== undefined && student.state === true;
    });
    return filteredData;
  }

  avgDifficulty(studentData, assignment) {
    let average = 0;
    let items = 0;
    studentData.forEach((item) => {
      if (item.assignment === assignment) {
        average += item.difficult;
        items++;
      }
    });
    return average / items;
  }

  avgJoy(studentData, assignment) {
    let average = 0;
    let items = 0;
    studentData.forEach((item) => {
      if (item.assignment === assignment) {
        average += item.fun;
        items++;
      }
    });
    return average / items;
  }

  render() {
    const filteredData = this.filteredData(this.props.studentData);
    const avgData = this.avgData(filteredData);
    return (
      <div className="Home">
        <h1>Overzicht Studenten</h1>
        <Chart studentData={avgData} />
        <StudentSelection
          studenten={this.props.studenten}
          studentsChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Home;
