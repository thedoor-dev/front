import axios from "axios";
import { getToken, isSignin } from "../store";

const requests = axios.create();


requests.interceptors.request.use(config => {
    if (isSignin())
        config.headers["X-Token"] = getToken();
    return config
});

requests.interceptors.response.use(response => {
    if (response.status !== 200) {
        alert("请求失败！！！");
    } else {
        switch (response.data.code) {
            case 2000:
                return response.data;
            default:
                alert("未捕获的异常！！！");
                break;
        }
    }
})

export default requests;
