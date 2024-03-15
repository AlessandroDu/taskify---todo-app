"use client"

export function Modal({ closeModal }) {
    return (
        <div className="modal-container">
            <form>
                <div>
                    <input type="text" placeholder="Project" />
                </div>
                <div>
                    <label for="status" >Status</label>
                    <select name="status">
                        <option value="done">Done</option>
                        <option value="working on it">Working on it</option>
                        <option value="stuck">Stuck</option>
                        <option value="not started">Not started</option>
                    </select>
                </div>
                <div>
                    <label>Due date</label>
                    <input type="date" />
                </div>
                <div>
                    <label>Priority</label>
                    <select name="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                    </select>
                </div>
            </form>
        </div>
    )
}