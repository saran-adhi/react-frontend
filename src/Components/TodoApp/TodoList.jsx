import { useContext, useEffect } from "react";
import { AuthContext } from "./security/AuthProvider";
import { apiService1 } from "../../ApiService";

export default function TodoList() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDay());

    const context = useContext(AuthContext)

    // console.log(context.name)
    // const todoList = [
    //     { id: 1, description: "Spring Boot", done: false, targetDate: targetDate },
    //     { id: 2, description: "Learn Docker", done: false, targetDate: targetDate },
    //     { id: 3, description: "Android from Google", done: false, targetDate: targetDate }
    // ]

    useEffect(()=>{
        FetchTodos();
    },[])
    const FetchTodos = ()=> {
        apiService1(context.name)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    };
    return (
        <div className="container">
            <h1>Things Wanted To Do at the end of this month</h1>

            <div>
                {/* <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done ?</td>
                            <td>DeadLine</td>
                        </tr>
                    </thead>
                    {
                        todoList.map
                            (
                                (list, _i) =>
                                (<tbody key={_i}>
                                    <tr>
                                        <td>{list.id}</td>
                                        <td>{list.description}</td>
                                        <td>{list.done.toString()}</td>
                                        <td>{list.targetDate.toDateString()}</td>
                                    </tr>
                                </tbody>)
                            )
                    }
                </table> */}
            </div>
        </div>
    );
}