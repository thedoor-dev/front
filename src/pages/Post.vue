<template>
    <div id="post" class="mainpage">
        <div class="header">
            <span>{{ title }}</span>
            <div>
                <i class="fa fa-calendar" aria-hidden="true" style="color: white;"></i>
                {{ ctime }}
            </div>
        </div>
        <div id="vditor"></div>
        <div id="th-comment"></div>
    </div>
</template>


<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core"
import Vditor from "vditor"
import { useRoute } from "vue-router"
import { getPost } from "../api/post"
import Valine from "valine"
import { format } from 'date-fns'
import { parseISO } from "date-fns/fp"

const route = useRoute();

ref: title = "";
ref: ctime = "";
ref: article = "";
const div = document.createElement("div");

const pid = Number(route.params.id);
getPost(pid).then((res) => {
    console.log(res);
    title = res.data.title;
    ctime = format(parseISO(res.data.ctime), "yyyy-MM-dd");
    article = res.data.article;
    Vditor.preview(div, article);
});

onMounted(async () => {
    const vditor = (document.getElementById("vditor"));
    if (vditor)
        vditor.appendChild(div);
    console.log(article);
    new Valine({
        el: '#th-comment',
        appId: '4J6kSyNCcrVSlmOCoXAHP44L-gzGzoHsz',
        appKey: 'tE2RaCm5Q1NUE2neI6Dowxzq'
    })
})
</script>


<style lang="scss" scoped>
#post {
    .header {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 48vh;
        span {
            font-size: 3rem;
            font-weight: 900;
        }
    }
    #vditor {
        margin-top: 40px;
        background-color: white;
        padding: 48px 10% 48px 10%;
        border-radius: 8px;
        box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%),
            0 17px 50px 0 rgb(0 0 0 / 19%);
    }
}
</style>
