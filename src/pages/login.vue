<template>
  <div class="login">
    <div class="login-header">
      <div class="h-logo">
        <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
      </div>
    </div>
    <div class="login-content">
      <div class="wraper">
        <div class="login-box">
          <div class="login-box-header">
            <span class="login-color">账号登录</span> <span class="line"></span> <span>扫码登录</span>
          </div>
          <div class="login-box-input">
            <input type="text" placeholder="邮箱/手机号码/小米ID" class="inputOne" v-model="username">
            <input type="text" placeholder="密码" v-model="password">
          </div>
          <div class="login-box-login">
            <a href="javascript:;" @click="login">登录</a>
          </div>
          <div class="login-box-register">
            <div class="register-left">
              <a href="javascript:;" @click="register">
                <p>手机号码登录/注册</p>
              </a>
            </div>
            <div class="register-right">
              <a href="javascript:;"><span>立即注册</span><span class="forget">忘记密码?</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="footer-top">
        <span>简体</span><span class="footer-line">|</span><span>繁体</span><span
          class="footer-line">|</span><span>English</span><span class="footer-line">|</span>常见问题<span></span>
        <span class="footer-line">|</span><span>隐私政策</span></div>
      <div class="footer-botton">
        <span>小米公司版权所有-京ICP备10046444-</span><img
          src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
          alt=""><span>京公网安备11010802020134号-京ICP证110507号</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login () {
      const { username, password } = this
      this.axios.post('/user/login', {
        username, password
      }).then((res) => {
        this.$cookie.set('userId', res.id, 1) // vue-cookie
        this.$store.dispatch('saveUserName', res.username) // Vuex状态管理
        this.$router.push('/index')
      })
    },
    register () {
      this.axios.post('/user/register', {
        username: '666', password: '666', email: '63@qq.com'
      }).then((res) => {
        alert('注册成功')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.login {
  .login-header {
    width: 1130px;
    height: 98px;
    margin: 0 auto;
    a {
      display: block;
      height: 98px;
      width: 200px;
    }
    img {
      width: auto;
      height: 98px;
    }
  }
  .login-content {
    background: url("/imgs/login-bg.jpg") no-repeat center;
    height: 580px;
    .wraper {
      width: 1130px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      .login-box {
        width: 400px;
        height: 520px;
        background-color: $colorG;
        position: absolute;
        top: 30px;
        right: 0;
        .login-box-header {
          font-size: 20px;
          font-weight: bold;
          height: 80px;
          width: 400px;
          text-align: center;
          line-height: 80px;

          .login-color {
            color: $colorA;
          }
          .line {
            margin: 0 30px;
            border: 1px solid $colorE;
            font-size: 16px;
            margin-top: 10px;
          }
        }
        .login-box-input {
          width: 400px;
          height: 150px;
          input {
            display: block;
            width: 350px;
            height: 45px;
            margin: 20px auto;
            border: 1px solid $colorF;
            padding-left: 15px;
            box-sizing: border-box;
            color: $colorD;
          }
        }
        .login-box-login {
          width: 350px;
          height: 50px;
          margin: 0 auto;
          background-color: $colorA;
          text-align: center;
          line-height: 50px;
          font-size: 15px;
          a {
            color: $colorG;
            display: block;
          }
        }
        .login-box-register {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          font-size: 14px;
          .register-left {
            padding-left: 23px;
            a {
              color: $colorA;
            }
          }
          .register-right {
            a {
              color: $colorD;
            }
          }
          span {
            margin-right: 20px;
          }
          .forget {
            padding-right: 5px;
          }
        }
      }
    }
  }
  .login-footer {
    height: 330px;
    position: relative;
    .footer-top {
      position: absolute;
      top: 220px;
      left: 50%;
      font-size: 16px;
      transform: translateX(-50%);
      cursor: pointer;
      .footer-line {
        margin: 0 10px;
      }
    }
    .footer-botton {
      position: absolute;
      top: 260px;
      left: 50%;
      font-size: 16px;
      transform: translateX(-50%);
    }
  }
}
</style>
