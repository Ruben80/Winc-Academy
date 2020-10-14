import React from "react";
import Graph from "../components/graphics/Graphics";
import Chart from "../components/graphics/Charts";

class StudentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: props.match.params.name,
    };
  }

  avgAssignment(studentData, assignment) {
    let average = 0;
    let items = 0;
    studentData.forEach((item) => {
      if (item.assignment === assignment) {
        average += (item.difficult + item.fun) / 2;
        items++;
      }
    });
    return average / items;
  }

  avgStudent(studentData) {
    const avgData = studentData.map((studentItem) => {
      const average = (studentItem.difficult + studentItem.fun) / 2;
      return {
        id: studentItem.id,
        name: studentItem.name,
        assignment: studentItem.assignment,
        average: average,
      };
    });
    return avgData;
  }

  avgStudents(studentData) {
    const avgStudentData = [];
    let filterItemId = 1;
    studentData.forEach((studentItem) => {
      const data = avgStudentData.find((filterItem) => {
        return studentItem.assignment === filterItem.assignment;
      });
      if (data === undefined) {
        const average = this.avgAssignment(studentData, studentItem.assignment);
        avgStudentData.push({
          id: filterItemId++,
          name: "average",
          assignment: studentItem.assignment,
          average: average,
        });
      }
    });
    return avgStudentData;
  }

  render() {
    const studentData = this.props.studentData.filter((item) => {
      return item.name === this.state.studentName;
    });
    const avgDataStudent = this.avgStudent(studentData);
    const avgDataStudents = this.avgStudents(this.props.studentData);
    return (
      <div className="StudentView">
        <h1>{this.state.studentName}</h1>
        <Chart studentData={studentData} />
        <Graph avgStudent={avgDataStudent} avgAll={avgDataStudents} />
      </div>
    );
  }
}

export default StudentView;
