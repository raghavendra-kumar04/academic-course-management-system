import Navbar from "../../components/common/Navbar";
import "./student.css";

export default function Grades() {
  return (
    <>
      <Navbar />
      <div className="student-page">
        <h2 className="student-header">Grades</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DBMS</td>
              <td>A</td>
            </tr>
            <tr>
              <td>ML</td>
              <td>B+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}