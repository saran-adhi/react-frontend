import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";

function LoginComponent() {

    const [username, setname] = useState('');
    const [password, setpassword] = useState('');

    const [success, setSuccess] = useState(Boolean);
    const [failed, setFailed] = useState(Boolean);

    const navigation = useNavigate();
    const context = useAuth();

    const handleSubmit = () => {
        // console.log('Username :', username, 'Password :', password);
        if (username === "Saran" && password === "1234") {
            setSuccess(true);
            setFailed(false);
            context.setAuthentication(true)
            navigation(`/welcome/${username}`);
        }
        else {
            setSuccess(false);
            setFailed(true);
        }
    }

    return (
        <div className="Login">
            {success && <div className="Success"> Authentication is Success</div>}
            {failed && <div className="Failed"> Authentication is Failed</div>}

            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" onChange={(e) => setname(e.target.value)} />
                </div>

                <div>
                    <label>Password</label>
                    <input type="text" onChange={(e) => setpassword(e.target.value)} />
                </div>

                <div>
                    <button onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;