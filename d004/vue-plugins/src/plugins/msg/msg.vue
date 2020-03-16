<template>
  <div>
    <div class="msg" ref = "msg" :class="{active: msgStatus}">
        <div class="msg-warpper">
            {{text}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-msg',
  data(){
    return{
      msgStatus: false,
      text:'',
    }
  },
  methods:{
      msgPlugin(msg, time){
          this.text = msg;
          this.msgStatus = true;
          // 以默认配置 用户配置为覆盖
          var newTime;
          !time ? newTime = 2000 : newTime = time;
          setTimeout(()=>{
              this.msgStatus = false;
          }, newTime)
      }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msg{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    min-height: 0;
    text-align: center;
    background: rgba(0,0,0,0.5);
    border-radius: 5px;
    color: #ffffff;
    transition: all 0.5s;
    z-index: -1;
    opacity: 0;
}
.msg.active{
    width: 150px;
    min-height: 25px;
    opacity: 1;
    z-index: 11;
}
</style>
