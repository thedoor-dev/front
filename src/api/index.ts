import axios from "axios";
import { useRouter } from "vue-router";
import { getToken, isSignin } from "../store";

const requests = axios.create();

requests.interceptors.request.use(config => {
    if (isSignin())
        config.headers["X-Token"] = getToken();
    return config
});

requests.interceptors.response.use(response => {
    switch (response.status) {
        case 200:
            switch (response.data.code) {
                case 2000:
                    return response.data;
                // case 4003:
                default:
                    alert("未捕获的异常！！！");
                    break;
            }
        default:
            alert("请求失败！！！");
    }
})

export default requests;
