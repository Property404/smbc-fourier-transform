<template>
<h1>Fouriest Transform</h1>
<div v-if="!help" class="main">
  <input v-model="input_number" autofocus>
  <div v-if="computedOutput.warning">{{computedOutput.warning}}</div>
  <div v-if="!(computedOutput.warning)">
    {{computedOutput.input}}<sub>10</sub> ⇒ {{computedOutput.value}}<sub>{{computedOutput.base}}</sub>
  </div>
  <button v-on:click="toggleHelp">Confused?</button>
</div>
<div v-if="help" class="main">
  This app is a joke based off this SMBC comic
  <img src="smbc-fourier.gif">
  <button v-on:click="toggleHelp">Back</button>
</div>
</template>

<script>
import {presentAsBase, fouriest} from "./fourier";
export default {
  name: 'App',
  data(){
    return{
      input_number:624,
      output_number:null,
      output_number_based:null,
      output_base:null,
      warning:null,
      help:false
    }
  },
  components: {
  },
  computed:{
    computedOutput()
    {
      const output_number = parseInt(this.input_number,10);
      if(output_number<1)
      {
        return {warning:"Input must be greater than one"};
      }
      else if(output_number != this.input_number)
      {
        return {warning : "Input should be integer"};
      }
      else if(output_number>1000000)
      {
        return {warning : "Number too large"};
      }
      else
      {
        let output_base = fouriest(this.input_number)
        if(output_base === 0)
          output_base = 10;
        return {
          input: output_number,
          value: presentAsBase(output_number, output_base),
          base:output_base
        };
      }
    }
  },
  methods:{
    toggleHelp(){
      this.help=!this.help;
    }
  }
}
</script>

<style lang="scss">
html,body{
  margin:0;
  padding:0;
  height:100%;
  background-color:#eee;
}
#app {
  width:100%;
  display:flex;
  flex-direction:column;
  height:100%;
  padding:0;
  font-size:2rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  h1{
    font-size:2.5rem;
    padding:.2rem;
    margin:0;
  }
  .main{
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    input,button{
        min-height:3rem;
        font-size:inherit;
        text-align:center;
    }
    button{
      background-color:blue;
      border:none;
      color:white;
      cursor:pointer;
      &:hover{
        background-color:#0000cc;
      }
    }
  }

  img{
    mix-blend-mode: multiply;
  }
}
@media(min-width:800px){
  body{
    display:flex;
    justify-content:center;
    #app{
      max-width:800px;
    }
  }
}
@media(min-width:600px){
      img{
        max-width:75%;
        align-self:center;
      }
}
</style>
