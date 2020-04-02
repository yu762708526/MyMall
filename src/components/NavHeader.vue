<template>
  <div>
    <div class="header">
      <div class="header-top">
        <div class="container">
          <div class="header-top-menu">
            <a href="javascript:;">小米商城</a>
            <a href="javascript:;">MUI</a>
            <a href="javascript:;">云服务</a>
            <a href="javascript:;">协议规则</a>
          </div>
          <div class="header-top-user">
            <a href="javascript:;" v-if="username">{{username}}</a>
            <a href="/#/login" v-if="!username" @click="login">登录</a>
            <a href="javascript:;" v-if="username">我的订单</a>
            <a href="javascript:;" class="cart" @click="toCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>
          </div>
        </div>
      </div>
      <div class="header-bot">
        <div class="container">
          <div class="header-bot-logo"><a href="/#/index"></a></div>
          <div class="header-bot-menu">
            <div class="itemMenu">
              <span>小米手机</span>
              <div class="chirdren">
                <ul>
                  <li class="product" v-for="(item, index) in phoneList" :key="index">
                    <a :href="'/#/product/'+item.id" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="item.mainImage" :alt="item.subtitle">
                      </div>
                      <div class="pro-name">
                        {{item.name}}
                      </div>
                      <div class="pro-price">
                        {{item.price | currencv}}
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="itemMenu">
              <span>RedMi红米</span>
              <div class="chirdren"></div>
            </div>
            <div class="itemMenu">
              <span>电视</span>
              <div class="chirdren">
                <ul>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="">
                      </div>
                      <div class="pro-name">
                        小米壁画电视 65英寸
                      </div>
                      <div class="pro-price">
                        6999元
                      </div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                      </div>
                      <div class="pro-name">
                        小米全面屏电视
                      </div>
                      <div class="pro-price">
                        1749元
                      </div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="">
                      </div>
                      <div class="pro-name">
                        小米电视4A 32寸
                      </div>
                      <div class="pro-price">
                        699元
                      </div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="">
                      </div>
                      <div class="pro-name">
                        小米电视4A 55寸
                      </div>
                      <div class="pro-price">
                        1699元
                      </div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="">
                      </div>
                      <div class="pro-name">
                        小米电视4A 65寸
                      </div>
                      <div class="pro-price">
                        2599元
                      </div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="">
                      </div>
                      <div class="pro-name">
                        小米全面屏电视
                      </div>
                      <div class="pro-price">
                        1799元
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="header-bot-search">
            <div class="wrapper">
              <input type="text">
              <a href="javascript:;"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-header',
  data () {
    return {
      // username:''
      phoneList: []
    }
  },
  computed: {
    // 解决Vuex延迟的问题
    username () {
      return this.$store.state.username
    },
    cartCount () {
      return this.$store.state.cartCount
    }
  },
  filters: {
    currencv (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getPhoneList()
  },
  methods: {
    getPhoneList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then((res) => {
        // if (res.list.length >= 6) {
        //   this.phoneList = res.list.slice(0, 6)
        // }
        this.phoneList = res.list
      })
    },
    toCart () {
      this.$router.push('/cart')
    },
    login () {
      this.$router.push('/login')
    }
  }
}

</script>
<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .header-top {
    height: 40px;
    background-color: #333333;
    color: #b0b0b0;
    line-height: 40px;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 10px;
      }
      .cart {
        background: #ff6600;
        width: 120px;
        text-align: center;
        margin: 0;
        color: #ffffff;
        .icon-cart {
          @include bgimg(16px, 12px, "/imgs/icon-cart-checked.png");
          // background: url("/imgs/icon-cart-checked.png") no-repeat center;
          // display: inline-block;
          // width: 16px;
          // height: 12px;
          // background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }

  .header-bot {
    .container {
      @include flex();
      height: 100px;
      position: relative;
      .header-bot-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          height: 55px;
          width: 110px;
          &:before {
            @include bgimg(55px, 55px, "/imgs/mi-logo.png");
            content: "";
            transition: margin 0.3s;
          }
          &:after {
            @include bgimg(55px, 55px, "/imgs/mi-home.png");
            content: "";
          }
          &:hover:before {
            margin-left: -55px;
          }
        }
      }
      .header-bot-menu {
        display: inline-block;
        width: 676px;
        padding-left: 200px;
        .itemMenu {
          display: inline-block;
          font-size: 16px;
          font-weight: bold;
          margin-right: 20px;
          line-height: 100px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .chirdren {
              height: 220px;
              opacity: 1;
            }
          }
          .chirdren {
            width: 1226px;
            position: absolute;
            height: 0;
            opacity: 0;
            top: 100px;
            left: 0;
            border-top: 1px solid #d7d7d7;
            box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.11);
            background-color: #ffffff;
            transition: all 0.5s;
            overflow: hidden;
            z-index: 100;
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              position: relative;
              a {
                display: inline-block;
              }
              img {
                width: 150px;
                height: auto;
              }
              .pro-img {
                height: 120px;
                margin-top: 30px;
              }
              .pro-name {
                color: $colorB;
                font-weight: bold;
              }
              .pro-price {
                color: $colorA;
                margin-top: 10px;
              }
              &:before {
                content: "";
                position: absolute;
                top: 30px;
                right: 0;
                border-right: 1px solid #d7d7d7;
                width: 1px;
                height: 100px;
              }
              &:last-child:before {
                border: none;
              }
            }
          }
        }
      }
      .header-bot-search {
        width: 295px;
        .wrapper {
          display: flex;
          border: 1px solid #999999;
          height: 50px;
          align-items: center;
          input {
            display: inline-block;
            height: 50px;
            border: none;
            border-right: 1px solid #999999;
            width: 245px;
            padding-left: 15px;
            box-sizing: border-box;
          }
          a {
            @include bgimg(25px, 25px, "/imgs/icon-search.png");
            // display: inline-block;
            // width: 25px;
            // height: 25px;
            // background: url('/imgs/icon-search.png') no-repeat center;
            // background-size: contain;
            margin-left: 12px;
          }
        }
      }
    }
  }
}
</style>
