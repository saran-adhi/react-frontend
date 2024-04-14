import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";

export default function HeaderComponent() {
    const context = useAuth();

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://github.com/saran-adhi">saranadhi</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                {
                                    context.isAutheticated &&
                                    (
                                        <li className="nav-item"><Link className="nav-link" to="/welcome/saran">Home</Link></li>
                                    )
                                }
                                {
                                    context.isAutheticated &&
                                    (
                                        <li className="nav-item"><Link className="nav-link" to="/todo">Todo</Link></li>
                                    )
                                }

                            </ul>
                        </div>
                        <ul className="navbar-nav">

                            {
                                context.isAutheticated ?
                                    (
                                        <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
                                    )
                                    :
                                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    );
}