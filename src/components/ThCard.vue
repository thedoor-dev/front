<template>
    <div class="th-card">
        <div class="img">
            <img
                :src="`https://gitee.com/SunspotsInys/imgs/raw/master/thedoor/${props.avatar}`"
                @click="toPost(props.id)"
                alt="png"
            />
        </div>
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
    avatar: { type: String, default: "hello.png" },
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

    .img {
        flex: 1;
        padding: 16px;
        img {
            width: 100%;
            height: 10rem;
            object-fit: cover;
            box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%),
                0 4px 15px 0 rgb(0 0 0 / 15%);
            border-radius: 0.25rem;
        }
    }

    article {
        flex: 2;
        h1:hover,
        p:hover {
            color: blue;
            transition: 0.5s;
        }
        .meta {
            display: flex;
            align-items: center;
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