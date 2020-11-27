<template>
<h1>Fouriest Transform</h1>
<form>
<input v-on:changeValue="updateValue" v-model="input_number" autofocus>
<div v-if="!warning">{{output_number}}<sub>10</sub> ⇒ {{this.output_number_based}}<sub>{{this.output_base}}</sub></div>
<div v-if="warning">{{warning}}</div>
<button v-on:click.prevent="updateValue" type="submit">Calculate</button>
</form>
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
      warning:null
    }
  },
  components: {
  },
  beforeMount(){
    this.updateValue();
  },
  methods:{
    updateValue()
    {
      this.output_number = parseInt(this.input_number,10);
      this.warning = null;
      if(this.output_number<1)
      {
        this.warning = "Input must be greater than one";
      }
      else if(this.output_number != this.input_number)
      {
        this.warning = "Input should be integer";
      }
      else if(this.output_number>800000)
      {
        this.warning = "Number too large";
      }
      else
      {
        this.output_base = fouriest(this.input_number)
        if(this.output_base === 0)
          this.output_base = 10;
        this.output_number_based = presentAsBase(this.output_number, this.output_base);
      }
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
  form{
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
}
</style>
