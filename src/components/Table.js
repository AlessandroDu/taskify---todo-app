"use client";

import { useState } from "react";

export function Table({ projects, toolbarToggle }) {
    const [editingName, setEditingName] = useState(false);
    const [editingStatus, setEditingStatus] = useState(false);

    const [newProjectName, setNewProjectName] = useState("");
    const [newStatus, setNewStatus] = useState("Not started");
    const [newDueDate, setNewDueDate] = useState("");
    const [newPriority, setNewPriority] = useState("Low");
    const [newNotes, setNewNotes] = useState("");

    function editOnDC1(idx) {
        if (!editingName) {
            setEditingName(true);
        } else {
            setEditingName(false);
            projects[idx].projectName = newProjectName;
        }
    }

    function editOnDC2(idx) {
        if (!editingStatus) {
            setEditingStatus(true);
        } else {
            setEditingStatus(false);
            projects[idx].status = newStatus;
        }
    }

    
    return (
    <table className="table">
        <thead>
            <tr>
                <th></th>
                <th>Project</th>
                <th>Status</th>
                <th>Due date</th>
                <th>Priority</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            {
                projects.map((project, idx) => {

                    return (
                        <tr key={idx}>
                            <td>
                                <input name="select" type="checkbox"
                                    onClick={(e) => {
                                        toolbarToggle(e.currentTarget, idx);
;                                   }} />
                            </td>

                            <td onDoubleClick={() => { editOnDC1(idx) }}>
                                {editingName ? 
                                <input type="text" defaultValue={projects[idx].projectName} placeholder="Project" onChange={(e) => setNewProjectName(e.target.value)} /> 
                                : projects[idx].projectName}
                            </td>
                            <td onDoubleClick={() => { editOnDC2(idx) }}>
                                { editingStatus ?
                                <select name="status" onChange={(e) => setNewStatus(e.target.value)}>
                                    <option value="not started">Not started</option>
                                    <option value="done">Done</option>
                                    <option value="working on it">Working on it</option>
                                    <option value="stuck">Stuck</option>
                                </select>
                                : projects[idx].status }
                            </td>
                            <td>{ project.dueDate ? project.dueDate : <input type="date" /> }</td>
                            <td>{ project.priority }</td>
                            <td>{ project.notes }</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    );
};
