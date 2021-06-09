import { InjectionKey } from "@vue/runtime-core";
import { createStore, useStore as baseUseStore, Store } from "vuex"

export interface State {
    id: number
    username: string
    avatar: string
    token: string
}

export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
    state: {
        id: localStorage.getItem("id") === null ? 0 : Number(localStorage.getItem("id")),
        username: localStorage.getItem("username") === null ? "" : String(localStorage.getItem("username")),
        avatar: localStorage.getItem("avatar") === null ? "" : String(localStorage.getItem("avatar")),
        token: localStorage.getItem("token") === null ? "" : String(localStorage.getItem("token"))
    },
    getters: {
        isLogin: state => !(state.id == 0 || isNaN(state.id))
    },
    mutations: {
        signin(state: State, nv: State) {
            state.id = nv.id;
            state.username = nv.username;
            state.avatar = nv.avatar;
            state.token = nv.token;
            localStorage.setItem("id", String(nv.id));
            localStorage.setItem("username", nv.username);
            localStorage.setItem("avatar", nv.avatar);
            localStorage.setItem("token", nv.token);
        }
    }
})

export const useStore = () => { return baseUseStore(key) };

export const isSignin = () => !(store.state.id == 0 || isNaN(store.state.id));

export const getToken = () => isSignin() ? store.state.token : "啥玩意儿？？？";

export default store;