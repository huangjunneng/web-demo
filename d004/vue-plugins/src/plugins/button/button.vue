<template>
  <div>
      <button 
        :class="
        type === 'warn' ? 'warn' : 
        type === 'error' ? 'error': 'defaultBtn'">
        <slot></slot>
      </button>
  </div>
</template>

<script>
export default {
  name: 'vue-button',
  props:{
      type:{
          type:String,
          default:"defaultBtn"
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
    color: #ffffff;
    border:none;
}
button.defaultBtn{
    background: blue;
}
button.warn{
    background: orange;
}
button.error{
    background: red;
}
</style>
