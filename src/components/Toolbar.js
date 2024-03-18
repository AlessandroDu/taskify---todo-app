"user client";

export function Toolbar({ deleteRow }) {

    return <div className="toolbar-container">
            <h2>Toolbar</h2>
            <button className="btn toolbar-btn-delete" type="button" onClick={() => deleteRow()} >Delete project</button>
        </div>
}
