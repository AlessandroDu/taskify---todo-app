"use client";

import { select } from "d3";
import { useState } from "react";

export function Table({ projects, setToolbarOpen, setIndex }) {

    function toolbarToggle(e) {
        if (e.checked) {
            setToolbarOpen(true)
        } else setToolbarOpen(false)
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
                                        setIndex(idx);
                                        toolbarToggle(e.currentTarget);
;                                   }} />
                            </td>
                            <td>{ project.projectName }</td>
                            <td>{ project.status }</td>
                            <td>{ project.dueDate }</td>
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
