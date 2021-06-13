import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store } from "vuex"

export interface State {
    username: string
    avatar: string
    token: string
}

export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
    state: {
        username: localStorage.getItem("username") === null ? "" : String(localStorage.getItem("username")),
        avatar: localStorage.getItem("avatar") === null ? "" : String(localStorage.getItem("avatar")),
        token: localStorage.getItem("token") === null ? "" : String(localStorage.getItem("token"))
    },
    getters: {
        isLogin: state => state.token !== ""
    },
    mutations: {
        signin(state: State, nv: State) {
            state.username = nv.username;
            state.avatar = nv.avatar;
            state.token = nv.token;
            localStorage.setItem("username", nv.username);
            localStorage.setItem("avatar", nv.avatar);
            localStorage.setItem("token", nv.token);
        }
    }
})

export const isSignin = () => store.state.token !== "";

export const getToken = () => isSignin() ? store.state.token : "啥玩意儿？？？";

export default store;
