import axios from "axios";
export const axiosclient=axios.create({
    baseURL:"http://localhost:8000",
    withCredentials:true,
    withXSRFToken:true
})