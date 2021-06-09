<template>
    <div class="th-card">
        <img :src="``" @click="toPost(props.id)"/>
        <article>
            <h1 @click="toPost(props.id)">{{ props.title }}</h1>
            <p @click="toPost(props.id)">{{ props.abstract }}</p>
            <div class="meta">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                {{ format(props.ctime, "yyyy-MM-dd") }}
                <i
                    class="fa fa-tags"
                    aria-hidden="true"
                ></i>
                <slot></slot>
            </div>
        </article>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core"
import { format } from 'date-fns'
import { useRouter } from "vue-router"

interface Tag {
    tid: number
    pid: number
    name: string
}

const props = defineProps({
    id: { type: Number, default: 0 },
    title: { type: String, default: "" },
    avatar: { type: String, default: "" },
    abstract: { type: String, default: "" },
    ctime: { type: Date, default: new Date() }
})

const router = useRouter();
const toPost = (pid: number) => {
    router.push(`/post/${pid}`)
}
</script>

<style lang="scss">
.th-card {
    display: flex;
    padding: 8px;
    article {
        h1:hover,
        p:hover {
            color: blue;
            transition: 0.5s;
        }
        .meta {
            display: flex;
            gap: 8px;
            p {
                cursor: pointer;
                margin-block-start: 0;
                margin-block-end: 0;
                margin-inline-start: 0;
                margin-inline-end: 0;
            }
        }
    }
}
</style>