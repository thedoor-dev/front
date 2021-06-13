<template>
    <div id="vditor">
        <input type="button" value="提交" />
    </div>
</template>


<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import Vditor from "vditor";
import { adminHome } from "../api/admin";
import { getToken } from "../store";


adminHome().then((res) => {
    console.log(res);
})
onMounted(() => {
    const vditor = new Vditor("vditor", {
        height: 600,
        toolbarConfig: { pin: true },
        cache: { enable: false },
        upload: {
            url: "/api/admin/img",
            max: 1024 * 1024,
            accept: "image/png",
            setHeaders() {
                return {
                    "X-Token": getToken()
                }
            },
            format(files: File[], responseText: string): string {
                const imgName = JSON.parse(responseText).data;
                console.log(imgName);
                const respData = {
                    code: 0,
                    msg: "成功了",
                    data: {
                        errFiles: [],
                        succMap: {
                            img__: "https://gitee.com/SunspotsInys/imgs/raw/master/thedoor/" + imgName
                        }
                    }
                };
                console.log(respData);
                return JSON.stringify(respData).replace("img__", imgName);
            },
            multiple: false

        }
    })
})
</script>

<style lang="scss" scoped>
#vditor {
    margin: 20vh 16px 0 16px;
    border-radius: 8px;
}
</style>
