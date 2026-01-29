import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import "./student.css";

export default function SubmitAssignment() {
    const [fileName, setFileName] = useState("No file chosen");

    const handleFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };
  return (
    <>
      <Navbar />
        <div className="student-page">
            <h2 className="student-header">Submit Assignment</h2>

            <div className="card">
                <input type="file" id="file" onChange={handleFile} hidden />
                <label htmlFor="file" className="file-upload">
                    Choose File
                </label>
                <p className="file-name">{fileName}</p>
                <br />
                <button className="btn btn-primary">Upload</button>
            </div>
        </div>
    </>
  );
}