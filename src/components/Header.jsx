

export function Header() {
    return (
        <div className="header">
            <h2 className="page-title">Project Tracker</h2>
            <div className="nav">
                <ul>
                    <li className="nav-item">Overview</li>
                    <li className="nav-item">To Do</li>
                    <li className="nav-item">In Progress</li>
                    <li className="nav-item">Done</li>
                    <li className="nav-item">Notes</li>
                </ul>
            </div>
        </div>
    )
}