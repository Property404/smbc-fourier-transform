<template>
<input v-model="input_number">
<div>bla</div>
<button>Calculate</button>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
  height:100%;
  background-color:#eee;
}
#app {
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:space-between;
  height:100%;
  padding:0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
}
</style>
