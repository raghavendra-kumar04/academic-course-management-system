import Navbar from "../../components/common/Navbar";
import "./admin.css";

export default function UserManagement() {
  return (
    <>
      <Navbar />
      <div className="admin-page">
        <h2 className="admin-header">User Management</h2>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ravi Kumar</td>
              <td>Student</td>
              <td>Active</td>
              <td>
                <button className="admin-btn primary">Disable</button>
              </td>
            </tr>
            <tr>
              <td>Anita Sharma</td>
              <td>Teacher</td>
              <td>Active</td>
              <td>
                <button className="admin-btn primary">Disable</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}