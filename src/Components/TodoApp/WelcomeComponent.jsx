import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { apiService1, apiService2 } from "../../ApiService1";

function WelcomeComponent() {
    const { username } = useParams();

    // console.log(JSON.stringify(context,null,2))

    const callRestApi=()=>{
        console.log("Rest Api Spring Boot")

        apiService2("Adhitya")
        .then((res)=>{
            // console.log(JSON.stringify(res,null,2))
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(JSON.stringify(error,null,2))
        })
    }
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>

            <div>
                Manage your todos - <Link to='/todo'>List</Link>

                <div>
                <button class="btn btn-success m-5" onClick={callRestApi}>Call Rest Api</button>
                </div>
            </div>
        </div>
    );
}

export default WelcomeComponent;