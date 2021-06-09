<template>
    <div id="vditor"></div>
    <div class="btn" @click="submit">提交</div>
</template>

<script lang="ts" setup>
import Vditor from "vditor";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { newPoster } from "../api/post";

let vditor = null as null | Vditor
const router = useRouter();
const submit = () => {
    let cont = "\n";
    if (vditor)
        cont = vditor.getValue();
    if (cont !== "\n") {
        newPoster(cont).then((res) => {
            router.push("/");
        });
    } else {
        alert("请输入点东西!!!");
    }
}

onMounted(async () => {
    vditor = new Vditor("vditor", {
        height: 360,
        toolbarConfig: {
            pin: true,
        },
        cache: {
            enable: false,
        },
    });
})

</script>

<style lang="scss" scoped></style>