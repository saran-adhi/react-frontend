import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)
export const apiService1 = () => apiClient.get('/hello-world');
export const apiService2 = (username) => apiClient.get(`/hello-world/path-variable/${username}`);

export const apiService3 = () => apiClient.get("/hello-world");
