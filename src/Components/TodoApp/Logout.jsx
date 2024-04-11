import { useAuth } from "./security/AuthProvider";
import { useNavigate } from "react-router-dom";
function LogoutComponent() {
    const context = useAuth();
    const navigation = useNavigate();
    const logout = () => {
        context.setAuthentication(false)
        navigation("/login");
    }
    return (
        <div className="logout">
            <div>
                Thank You For Using Our Web App
            </div>
            <>
                nandri meedum vara vendam
            </>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>

    );
}
export default LogoutComponent;