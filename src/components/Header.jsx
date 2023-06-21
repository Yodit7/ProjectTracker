import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <div className="header">
            <h2 className="page-title">Project Tracker</h2>
            <div className="nav">
                <ul>
                    <li className="nav-item"><NavLink to="/" activeClassName="active">Overview</NavLink></li>
                    {/* <li className="nav-item"><NavLink to="/todo">To Do</NavLink></li>
                    <li className="nav-item"><NavLink to="/inprogress">In Progress</NavLink></li>
                    <li className="nav-item"><NavLink to="/done">Done</NavLink></li> */}
                    <li className="nav-item"><NavLink to="/notes" activeClassName="active">Notes</NavLink></li>
                </ul>
            </div>
        </div>
    )
}