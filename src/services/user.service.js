import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/";


const getUser = () => {
    return axios
        .get(API_URL + "auth/user-profile", { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

const getAvailableUsers = (id) => {
    return axios
        .get(`${API_URL}user/${id}/available`, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};


export default {
    getUser,
    getAvailableUsers
};