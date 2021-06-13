<template>
    <div id="home" class="mainpage">
        <div class="posts" style="margin-top: 60vh;">
            <th-card
                v-for="(i, j) in list"
                :key="j"
                :id="i.id"
                :title="i.title"
                :avatar="i.avatar"
                :abstract="i.article"
                :ctime="parseISO(i.ctime)"
            >
                <template v-for="(l, m) in i.tags" :key="m">
                    <p @click="toTag(l.tid)">{{ l.name }}</p>
                </template>
            </th-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ThCard from "../components/ThCard.vue"
import { posterList } from "../api/post"
import { onMounted } from "vue"
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
});
</script>

<style lang="scss" scoped>
#home {
    .posts {
        padding: 8px;
        border-radius: 8px;
        box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%),
            0 17px 50px 0 rgb(0 0 0 / 19%);
        background-color: white;
    }
}
</style>