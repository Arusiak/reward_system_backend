import axios from "axios";

const API_URL = "http://localhost:8000/api/";

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'auth/login', {
                login: user.login,
                password: user.password
            })
            .then(response => {
                // console.log(response)
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }s

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'auth/register', {
            fname: user.fname,
            lname: user.lname,
            bday: user.bday,
            login: user.login,
            password: user.password
        });
    }
}

export default new AuthService();