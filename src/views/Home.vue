<template>
  <div id="app">
    <div class="dlck">
      <span class="span-1">花生米超市后台系统</span>
      <el-input
        v-model="val"
        placeholder="登录账号"
        prefix-icon="el-icon-user-solid"
        class="input-1"
        maxlength="16"
        minlength="6"
      ></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="val2"
        show-password
        prefix-icon="el-icon-s-cooperation"
        class="input-1"
        maxlength="16"
        minlength="6"
      ></el-input>
      <el-input
        v-model="yzm"
        placeholder="验证码"
        maxlength="4"
        class="yzm"
        prefix-icon="el-icon-s-order"
      ></el-input>
      <div class="kkwq"></div>
      <el-button type="primary" class="denglu" @click="dlv">登录</el-button>
      <span class="span-99" @click="tiaozuan">免校验直接登录</span>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      input: "15073066237",
      input2: "123456",
      yzm: "",
      val: "",
      val2: "",
    };
  },
  methods: {
    tiaozuan() {
      this.$router.replace("/table-1");
    },
    dlv() {
      let date = qs.stringify({
        "username": this.val,
        "password": this.val2
      });
      this.$axios
        .post("http://139.9.169.87:8081/examsystem/login", date,{
          
        })
        .then((res) => {
          console.log(res);
          console.log(this.val);
          console.log(this.val2);
        });
    },
  },
};
</script>
<style scoped>
body {
  margin: 0px;
  padding: 0px;
}
.denglu {
  width: 80%;
  display: block;
  margin: 35px auto;
}
.span-99 {
  cursor: pointer;
  float: right;
  margin-right: 10%;
  font-size: 13px;
  color: blue;
}
.kkwq {
  width: 35%;
  height: 45px;
  background: url("../assets/img/kkwq.png") no-repeat;
  background-size: 100% 100%;
  float: right;
  margin-right: 10%;
}
.yzm {
  width: 35%;
  margin-left: 10%;
}
#app {
  width: 100%;
  background: url("../assets/img/bjtp.jpg") no-repeat;
  height: 937px;
  background-size: 100% 100%;
}
.dlck {
  width: 380px;
  height: 420px;
  background: #d5ecfa;
  border-radius: 5px;
  float: right;
  margin-top: 12%;
  margin-right: 10%;
}
.span-1 {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  color: #0066ff;
  text-align: center;
  display: block;
  margin-top: 20px;
}
.input-1 {
  width: 80%;
  margin: 35px auto;
  display: block;
  height: 30px;
}
</style>