import { useState } from "react";
import "./TodoApp.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={ <LoginComponent />}/>
                <Route path="/login" element={ <LoginComponent />}/>

            </Routes>
            </BrowserRouter>
            {/* <LoginComponent /> */}
        </div>
    );
}

function LoginComponent() {

    const [username, setname] = useState('');
    const [password, setpassword] = useState('');

    const [success, setSuccess] = useState(Boolean);
    const [failed, setFailed] = useState(Boolean);

    const handleSubmit = () => {
        // console.log('Username :', username, 'Password :', password);
        if (username === "Saran" && password === "1234") {
            setSuccess(true);
            setFailed(false);
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