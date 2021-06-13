<template>
  <th-nav />
  <router-view></router-view>
</template>

<script lang="ts" setup>
import ThNav from "./components/ThNav.vue";
</script>

<style lang="scss">
body {
  background-image: url(./assets/bg.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center 0;
  background-size: auto 70vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}
#app {
  flex: 1;
}
.mainpage {
  width: 72%;
  margin: auto;
}
@media screen and(max-width: 992px) {
  .mainpage {
    width: calc(100% - 8px);
  }
}
</style>