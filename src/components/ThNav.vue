<template>
    <div id="th-nav">
        <div id="nav" class="mainpage">
            <a href="/">The Door</a>
            <div>
                <a href="/">首页</a>
                <a href="/archives">归档</a>
                <a href="/tags">标签</a>
                <a href="/about">关于</a>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
</script>


<style lang="scss" scoped>
#th-nav {
    width: 100%;
    display: flex;
    position: fixed;
    justify-content: center;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    #nav {
        display: flex;
        justify-content: space-between;
        top: 0;
        &:first-child {
            cursor: pointer;
        }
        & > div {
            display: flex;
            gap: 8px;
        }
        a {
            padding: 8px;
        }
    }
}
</style>
