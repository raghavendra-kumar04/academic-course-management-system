import Navbar from "../../components/common/Navbar";
import { Link } from "react-router-dom";
import "./student.css";

export default function Assignments() {
  return (
    <>
      <Navbar />
      <div className="student-page">
        <h2 className="student-header">Assignments</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DBMS</td>
              <td>20 Feb</td>
              <td>Pending</td>
              <td>
                <Link to="/student/submit">
                  <button className="btn btn-primary">Submit</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}