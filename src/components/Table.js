
export function Table() {
    return (
        <div>
            <header >Taskify - Do What You Have ToDo!</header>
            <table className="table-auto border-collapse border border-slate-400">
              <thead>
                <tr>
                  <th className="border border-slate-300">Song</th>
                  <th className="border border-slate-300">Artist</th>
                  <th className="border border-slate-300">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
        </div>
    );
}