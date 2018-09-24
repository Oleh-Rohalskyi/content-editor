<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
