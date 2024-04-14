import LoginComponent from "./Login";
import LogoutComponent from "./Logout";
import "./TodoApp.css";
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link, Navigate } from "react-router-dom";
import WelcomeComponent from "./WelcomeComponent";
import TodoList from "./TodoList";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import AuthProvider, { useAuth } from "./security/AuthProvider";

function AuthenticationPath ({ children })  {
    const context = useAuth();
    if (context.isAutheticated) {
        return children
    }
    return <Navigate to="/" />
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />

                        <Route path="/login" element={<LoginComponent />} />

                        <Route path="/welcome/:username"
                            element={
                                <AuthenticationPath >
                                    <WelcomeComponent />
                                </AuthenticationPath>
                            }
                        />
                        <Route path="/todo"
                            element={
                                <AuthenticationPath >
                                    <TodoList />
                                </AuthenticationPath>
                            }
                        />
                        <Route path="/logout"
                            element={
                                <AuthenticationPath >
                                    <LogoutComponent />
                                </AuthenticationPath>
                            } />

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