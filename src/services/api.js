import  Axios  from "axios";

const api = Axios.create({
    baseURL:"http://192.168.1.54:8080/"
});

export default api;