"use client"

export function Modal() {
    return (
        <div className="modal-container">
            <form>
                <h3>Add Project</h3>
                <div>
                    <input type="text" placeholder="Project" />
                </div>
                <div className="modal-input-field-container">
                    <label for="status" >Status</label>
                    <select name="status">
                        <option value="done">Done</option>
                        <option value="working on it">Working on it</option>
                        <option value="stuck">Stuck</option>
                        <option value="not started">Not started</option>
                    </select>
                </div>
                <div className="modal-input-field-container">
                    <label>Due date</label>
                    <input type="date" />
                </div>
                <div className="modal-input-field-container">
                    <label>Priority</label>
                    <select name="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Notes" />
                </div>
                <div className="modal-btn-div">
                    <button className="btn btn-modal" type="button">+ Add</button>
                </div>
            </form>
        </div>
    )
}