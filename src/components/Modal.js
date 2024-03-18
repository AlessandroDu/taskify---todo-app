"use client"

import { useState } from "react";

export function Modal({ projects, setProjects }) {
    const [projectName, setProjectName] = useState("");
    const [status, setStatus] = useState("Not started");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("Low");
    const [notes, setNotes] = useState("");

    function addProject() {

        if (! (projectName && notes)) {
            alert("You forgot something...");
            return;
        }
        let newProject = {
          projectName: projectName,
              status: status,
              dueDate: dueDate,
              priority: priority,
              notes: notes,
        }
        setProjects([...projects, newProject]);
        setProjectName("");
        setStatus("Not started");
        setDueDate("");
        setPriority("Low");
        setNotes("");
    }

    return (
        <div className="modal-container">
            <form>
                <h3>Add Project</h3>
                <div>
                    <input value={ projectName } type="text" placeholder="Project" onChange={(e) => setProjectName(e.target.value)} />
                </div>
                <div className="modal-input-field-container">
                    <label htmlFor="status" >Status</label>
                    <select value={ status } name="status" onChange={(e) => setStatus(e.target.value)}>
                        <option value="not started">Not started</option>
                        <option value="done">Done</option>
                        <option value="working on it">Working on it</option>
                        <option value="stuck">Stuck</option>
                    </select>
                </div>
                <div className="modal-input-field-container">
                    <label>Due date</label>
                    <input value={ dueDate } type="date" onChange={(e) => setDueDate(e.target.value)} />
                </div>
                <div className="modal-input-field-container">
                    <label>Priority</label>
                    <select value={ priority } name="priority" onChange={(e) => setPriority(e.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                    </select>
                </div>
                <div>
                    <input value={ notes } type="text" placeholder="Notes" onChange={(e) => setNotes(e.target.value)} />
                </div>
                <div className="modal-btn-div">
                    <button className="btn btn-modal" type="button" onClick={() => addProject()}>+ Add</button>
                </div>
            </form>
        </div>
    )
}