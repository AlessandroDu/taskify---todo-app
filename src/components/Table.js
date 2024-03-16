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
                <td>project description</td>
                <td>project status</td>
                <td>project due date</td>
                <td>project priority</td>
                <td>project notes</td>
            </tr>
            <tr>
                <td>project description</td>
                <td>project status</td>
                <td>project due date</td>
                <td>project priority</td>
                <td>project notes</td>
            </tr>
            <tr>
                <td>project description</td>
                <td>project status</td>
                <td>project due date</td>
                <td>project priority</td>
                <td>project notes</td>
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
