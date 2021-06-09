<template>
    <div id="home" class="mainpage">
        <th-card
            v-for="(i, j) in list"
            :key="j"
            :id="i.pid"
            :title="i.title"
            :abstract="i.abstract"
            :ctime="parseISO(i.ctime)"
        >
            <template v-for="(l, m) in i.tags" :key="m">
                <p @click="toTag(l.tid)">{{ l.name }}</p>
            </template>
        </th-card>
        <div id="th-comment"></div>
    </div>
</template>

<script lang="ts" setup>
import ThCard from "../components/ThCard.vue"
import { posterList } from "../api/post"
import { onMounted } from "vue"
import Valine from "valine"
import { parseISO } from "date-fns/fp"
import { useRouter } from "vue-router"

const router = useRouter();

ref: list = [] as any[];

const getPosterList = () => {
    posterList().then((res) => {
        list = res.data;
    })
}

const toTag = (tid: number) => {
    router.push(`/tag/${tid}`);
}

onMounted(() => {
    getPosterList();

    new Valine({
        el: '#th-comment',
        appId: '4J6kSyNCcrVSlmOCoXAHP44L-gzGzoHsz',
        appKey: 'tE2RaCm5Q1NUE2neI6Dowxzq'
    })
});
</script>

<style lang="scss" scoped>
#home {
    background-color: white;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
}
</style>