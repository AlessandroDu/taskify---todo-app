"use client";

export function Table({ projects }) {

    return (
    <table className="table">
        <thead>
            <tr>
                <th>Project</th>
                <th>Status</th>
                <th>Due date</th>
                <th>Priority</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>project 1</td>
                <td>Working on it</td>
                <td>20/01/2004</td>
                <td>medium</td>
                <td>some notes here</td>
            </tr>
            {
                projects.map((project, idx) => {
                    return (
                        <tr key={idx}>
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
