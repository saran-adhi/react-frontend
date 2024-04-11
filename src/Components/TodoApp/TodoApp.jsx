import LoginComponent from "./Login";
import LogoutComponent from "./Logout";
import "./TodoApp.css";
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from "react-router-dom";
import WelcomeComponent from "./WelcomeComponent";
import TodoList from "./TodoList";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import AuthProvider from "./security/AuthProvider";

export default function TodoApp() {
    
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />

                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/welcome/:username" element={<WelcomeComponent />} />
                        <Route path="/todo" element={<TodoList />} />
                        <Route path="/logout" element={<LogoutComponent />} />

                        <Route path="*" element={<ErrorComponent />} />

                    </Routes>
                    {/* <FooterComponent /> */}
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}



function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>Not Pages Found at This site</h1>
        </div>
    );
}