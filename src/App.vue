<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
    @import '~@/assets/styles/index.styl';
    html,body{
      wh(100%, 100%);
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    #app {
      wh(100%, 100%);
    }
</style>
