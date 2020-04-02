<template>
  <div class="detail">
    <product-param :title="product.name"></product-param>
    <div class="wrapper">
      <div class="container clearfix">
        <div class="swiper fl">
          <swiper :options="swiperOptions">
            <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="info fr">
          <h2 class="h2One">{{product.name}}</h2>
          <p class="info_p">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br />
            外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
          <span class="xiaomi">小米自营</span>
          <div class="price"> <span class="price_color">{{product.price}}元</span> <span class="del">1999元</span></div>
          <div class="line"></div>
          <div class="address">
            <div class="address_info">
              <span class="icon"></span>
              <span class="address_detailed">北京 北京市 朝阳区 安定门街道</span>
            </div>
            <span class="tip">有现货</span>
          </div>
          <div class="size clearfix">
            <p>选择版本</p>
            <a href="javascript:;" class="fl" :class="{'check':version == 1}" @click="version = 1">6GB+64GB 全网通</a>
            <a href="javascript:;" class="fr" :class="{'check':version == 2}" @click="version =2">4GB+64GB 移动4G</a>
          </div>
          <div class="phoneColor">
            <p>选择颜色</p>
            <a href="javascript:;" class="check"><span class="square"></span>深空灰</a>
          </div>
          <div class="total">
            <div class="phone-info clearfix">
              <div class="fl">{{product.name}} {{version == 1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深灰色</div>
              <div class="fr">{{product.price}}元</div>
            </div>
            <div class="phone-total">总计：{{product.price}}元</div>
          </div>
          <div class="btn" @click="addCarts">加入购物车</div>
        </div>
      </div>
    </div>
    <div class="instructions">
      <p>价格说明</p>
      <div class="instructions_img">
        <img src="/imgs/detail/item-price.jpeg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import productParam from '../components/productParam'
export default {
  name: 'detail',
  components: {
    productParam
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: true,
        loop: true
      },
      version: 1, // 切换手机版本
      product: {} // 产品信息
    }
  },
  mounted () {
    this.getProductInfo()
  },
  methods: {
    getProductInfo () {
      const id = this.$route.params.id
      this.axios.get('/products/' + id).then((res) => {
        this.product = res
      })
    },
    addCarts () {
      const id = this.$route.params.id
      this.axios.post('/carts', { productId: id, selected: true }).then((res = { cartProductVoList: 0 }) => {
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
        // this.$router.push('/#/cart')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.detail {
  .wrapper {
    .container {
      height: 780px;
      .swiper {
        width: 606px;
        img {
          width: 100%;
        }
      }
      .info {
        width: 606px;
        .h2One {
          font-size: 30px;
          margin-bottom: 5px;
        }
        .info_p {
          font-size: 14px;
          margin-bottom: 25px;
        }
        .xiaomi {
          color: $colorA;
          font-size: 15px;
        }
        .price {
          margin-top: 10px;
          margin-bottom: 18px;
        }
        .price_color {
          color: $colorA;
          font-size: 20px;
        }
        .del {
          font-size: 15px;
          color: $colorD;
          text-decoration: line-through;
          margin-left: 10px;
        }
        .line {
          border-top: 1px solid $colorF;
          margin-bottom: 30px;
        }
        .address {
          height: 100px;
          background-color: #fafafa;
          border: 1px solid #e5e5e5;
          position: relative;
          .address_info {
            position: relative;
            .icon {
              @include bgimg(20px, 20px, "/imgs/detail/icon-loc.png");
              position: absolute;
              top: 30px;
              left: 30px;
            }
            .address_detailed {
              position: absolute;
              top: 30px;
              left: 60px;
              font-size: 14px;
              color: rgb(140, 140, 140);
            }
          }
          .tip {
            color: $colorA;
            font-size: 14px;
            position: absolute;
            top: 60px;
            left: 60px;
          }
        }
        .size {
          margin-top: 30px;
          p {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
          }
          a {
            display: inline-block;
            width: 296px;
            height: 45px;
            border: 1px solid #cccccc;
            font-size: 16px;
            color: #343633;
            text-align: center;
            line-height: 45px;
            font-weight: bold;

            &.check {
              border: 1px solid $colorA;
              color: $colorA;
            }
          }
        }
        .phoneColor {
          margin-top: 30px;
          a {
            display: inline-block;
            width: 296px;
            height: 45px;
            border: 1px solid #cccccc;
            font-size: 16px;
            color: #343633;
            text-align: center;
            line-height: 45px;
            font-weight: bold;
            position: relative;
            &.check {
              border: 1px solid $colorA;
              color: $colorA;
            }
            .square {
              display: inline-block;
              width: 15px;
              height: 15px;
              background-color: black;
              position: absolute;
              top: 14px;
              left: 104px;
            }
          }
          p {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
          }
        }
        .total {
          margin-top: 30px;
          height: 100px;
          background-color: #f6f9f6;
          .phone-info {
            font-size: 14px;
            padding: 20px 30px 20px 30px;
          }
          .phone-total {
            font-size: 20px;
            color: $colorA;
            margin-left: 30px;
          }
        }
        .btn {
          margin-top: 20px;
          height: 50px;
          width: 320px;
          background-color: #fb5b00;
          text-align: center;
          line-height: 50px;
          font-size: 15px;
          color: $colorG;
          cursor: pointer;
        }
      }
    }
  }
  .instructions {
    background-color: #eff2ef;
    height: 330px;
    p {
      font-size: 23px;
      font-weight: bold;
      height: 30px;
      margin-bottom: 65px;
      padding: 45px 0px 0px 25px;
      box-sizing: border-box;
    }
    .instructions_img {
      text-align: center;
      margin: 0 25px;
      img {
        height: 180px;
        width: 100%;
      }
    }
  }
}
</style>
