<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
