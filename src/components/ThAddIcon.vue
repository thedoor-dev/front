<template>
    <!-- <div v-if="isSignin()" @click="toNewPoster">
        <i class="fa fa-plus-circle fa-4x" aria-hidden="true"></i>
    </div> -->
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
// import { isSignin } from "../store";


const router = useRouter();
const toNewPoster = async () => {
    router.push("/newposter");
}
</script>

<style lang="scss" scoped>
div {
    position: fixed;
    bottom: 16px;
    left: calc(90% - 240px);
}

@media screen and (max-width: 1024px) {
    div {
        left: auto;
        right: 16px;
    }
}
</style>