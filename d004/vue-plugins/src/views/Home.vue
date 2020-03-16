
<template>
  <div class="home">
    <input placeholder="请输入姓名" v-model="value" />
    <button @click="submit">提交</button>
    <vue-msg ref="msg"></vue-msg>
        <vue-button type="warn">警告按钮</vue-button>
     <vue-button type="error">错误按钮</vue-button>
     <vue-button>默认按钮</vue-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: null
    };
  },
  methods: {
    submit() {
      if (!this.value) {
        // console.log(this.$msg);
        // this.$myMethods();
        this.$nextTick(() => {
          this.$refs.msg.msgPlugin("请输入姓名");
        });
      }
    }
  }
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
