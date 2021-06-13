<template>
    <div id="signin">
        <div>
            <input type="text" placeholder="用户名" v-model="uname" />
            <input type="password" placeholder="密码" v-model="upass" />
            <input type="button" value="登录" @click="signinBtn" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { signin } from '../api/auth';
import store from '../store';

ref: uname = "";
ref: upass = "";

const router = useRouter();
const signinBtn = () => {
    signin(uname, upass).then(({ data }) => {
        console.log(data);
        store.commit("signin", {
            username: data.name,
            avatar: data.img,
            token: data.token
        });
        router.back();
    })
}
</script>


<style lang="scss" scoped>
#signin {
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    div {
        // width: 40%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%),
            0 17px 50px 0 rgb(0 0 0 / 19%);
    }
}
</style>
