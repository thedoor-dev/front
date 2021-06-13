<!-- <template>
    <div id="login">
        <input type="text" v-model="username" placeholder="用户名" />
        <input type="password" v-model="password" placeholder="密码" />
        <button @click="comfireToSignIn">登录</button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { signin } from "../api/auth";
import { useStore } from "vuex";

ref: username = "";
ref: password = "";

const store = useStore();
const router = useRouter();
const comfireToSignIn = () => {
    signin(username, password).then((res) => {
        if (username === "") {
            alert("用户名呢？？？？")
            return
        };
        if (password === "") {
            alert("密码呢？？？？")
            return
        };
        store.commit("signin", res.data);
        router.push("/");
    })
}

</script>
 -->
