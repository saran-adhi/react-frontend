import { useParams, Link } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";

function WelcomeComponent() {
    const { username } = useParams();

    // console.log(JSON.stringify(context,null,2))
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>

            <div>
                Manage your todos - <Link to='/todo'>List</Link>
            </div>
        </div>
    );
}

export default WelcomeComponent;