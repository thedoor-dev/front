<template>
  <div style="margin: auto; width: 240px;">
    <img alt="logo" src="./assets/logo.png" style="width: 100%;" />
  </div>

  <router-view></router-view>
</template>


<style lang="scss">
// #app {
// }
body {
  background-image: url(./assets/bg.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  // background: url("https://rmt.dogedoge.com/fetch/fluid/storage/bg/vdysjx.png?w=1920&fmt=webp")
  //   center center / cover no-repeat;
  transform: translate3d(0px, 96px, 0px);
  margin: 0;
}
.mainpage {
  width: 80%;
  margin: auto;
}
@media screen and(max-width: 1024px) {
  .mainpage {
    width: calc(100% - 8px);
  }
}
</style>