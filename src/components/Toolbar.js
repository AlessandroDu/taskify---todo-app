"user client";

export function Toolbar({ deleteRow }) {

    return <div className="toolbar-container">
            <p>hello I'm a toolbar</p>
            <button type="button" onClick={() => deleteRow()} >Delete</button>
        </div>
}
