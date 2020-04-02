<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-list">
          <ul class="nav-list-ul">
            <li class="nav-list-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="chirdren">
                <ul v-for="(items, i) in phoneList" :key="i">
                  <li v-for="(item, j) in items" :key="j">
                    <a :href="item?'/#/product/'+item.id:''">
                      <img :src="item?item.img:'/imgs/item-box-1.png'" alt="">
                      {{item?item.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-list-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="nav-list-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="nav-list-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="nav-list-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="nav-list-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="nav-list-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="nav-list-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item, index) in swiperList" :key="index">
            <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>//焦点
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

      </div>
      <div class="adv-box">
        <a :href="'/#/product/'+item.id" v-for="(item, index) in advList" :key="index">
          <img v-lazy="item.img" alt="">
        </a>
      </div>
      <div class="banner-box">
        <a href="'/#/product/30'"><img v-lazy="'/imgs/banner-1.png'" alt=""></a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="leftImg"><a href="'/#/product/30'"><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""></a></div>
          <div class="listBox">
            <div class="list" v-for="(arr, i) in productList" :key="i">
              <div class="list-item" v-for="(item, j) in arr" :key="j">
                <span v-bind:class="{'new-pro':j%2==0}">新品</span>
                <div class="item-img"><a :href="'/#/product/'+item.id"><img v-lazy="item.mainImage" alt=""></a></div>
                <div class="info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price" @click="addCart(item.id)">{{item.price}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <!-- 添加购物车的提示框 -->
    <el-dialog title="标题" :visible.sync="addCartDialogVisible" width="50%">
      <span class="addInfo">商品添加成功!</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="toCart" class="addCartBtn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import ServiceBar from '../components/ServiceBar'
export default {
  name: 'index',
  components: {
    ServiceBar

  },
  data () {
    return {
      // 轮播图配置
      swiperOptions: {
        // 焦点
        pagination: {
          el: '.swiper-pagination',
          // 点击焦点切换
          clickable: true
        },
        // 轮播图循环
        loop: true,
        // 方块切换
        effect: 'cube',
        cubeEffect: {
          slideShadows: true, // 阴影
          shadow: true, // 投影
          shadowOffset: 100, // 投影距离
          shadowScale: 0.6// 投影缩放比例
        },
        // 自动切换
        autoplay: true,
        // 左右箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }

      },
      // 轮播图图片数据
      swiperList: [
        { id: '42', img: '/imgs/slider/slide-1.jpg' },
        { id: '45', img: '/imgs/slider/slide-2.jpg' },
        { id: '46', img: '/imgs/slider/slide-3.jpg' },
        { id: '', img: '/imgs/slider/slide-4.jpg' },
        { id: '', img: '/imgs/slider/slide-5.jpg' }
      ],
      // 轮播图左侧商品列表的hover数据
      phoneList: [
        [
          { id: '30', name: '小米cc9', img: '/imgs/item-box-1.png' },
          { id: '31', name: '小米8青春版', img: '/imgs/item-box-2.png' },
          { id: '32', name: 'Redmi k20 Pro', img: '/imgs/item-box-3.jpg' },
          { id: '33', name: '移动4G专区', img: '/imgs/item-box-4.jpg' }
        ], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ],
      // 广告位的数据
      advList: [
        { id: '33', img: '/imgs/ads/ads-1.png' },
        { id: '48', img: '/imgs/ads/ads-2.jpg' },
        { id: '45', img: '/imgs/ads/ads-3.png' },
        { id: '47', img: '/imgs/ads/ads-4.jpg' }
      ],
      // 下方手机产品展示区域的数据
      productList: [
      ],
      // 添加到购物车提示框默认隐藏
      addCartDialogVisible: false

    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 获取下方手机产品展示区域的数据的方法
    init () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res) => {
        res.list = res.list.slice(6, 14)
        this.productList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    },
    // 添加到购物车
    addCart (id) {
      this.addCartDialogVisible = true
      this.axios.post('/carts', { productId: id, selected: true }).then((res = { cartProductVoList: 0 }) => {
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
      })
    },
    // 跳转搭配购物车组件
    toCart () {
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  .swiper-box {
    overflow: hidden;
    .nav-list {
      width: 234px;
      height: 460px;
      // background-color: #55585a7a;
      background-color: rgba(105, 101, 101, 0.6);
      font-size: 16px;
      position: absolute;
      z-index: 9;
      padding: 30px 0;
      box-sizing: border-box;
      .nav-list-ul {
        .nav-list-item {
          height: 50px;
          line-height: 50px;
          a {
            color: #ffffff;
            display: block;
            position: relative;
            padding-left: 30px;
            &:after {
              content: "";
              @include bgimg(16px, 16px, "/imgs/icon-arrow.png");
              position: absolute;
              top: 17px;
              right: 20px;
            }
          }
          &:hover {
            background-color: $colorA;
            .chirdren {
              display: block;
            }
          }
          .chirdren {
            width: 992px;
            height: 460px;
            position: absolute;
            top: 0;
            left: 234px;
            background-color: $colorG;
            border: 1px solid #999999;
            box-sizing: border-box;
            display: none;
            ul {
              height: 77px;
              display: flex;
              justify-content: space-between;
              li {
                height: 77px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: #333333;
                font-size: 14px;
                overflow: hidden;
                &:after {
                  display: none;
                }
              }
              img {
                width: 40px;
                height: 40px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 460px;
      // width: auto;
      .swiper-button-prev {
        left: 244px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .adv-box {
    @include flex();
    margin-top: 20px;
    margin-bottom: 20px;
    a {
      width: 295px;
      height: 170px;
    }
  }
  .product-box {
    background-color: #f5f5f5;
    padding: 30px 0 50px;
    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .wrapper {
      display: flex;
      .leftImg {
        img {
          width: 234px;
          height: 614px;
        }
      }
      .listBox {
        width: 992px;
        .list {
          margin-bottom: 10px;
          &:last-child {
            margin-bottom: 0;
          }
          @include flex();
          .list-item {
            margin-left: 15px;
            background-color: $colorG;
            flex: 1;
            text-align: center;
            height: 302px;
            span {
              display: inline-block;
              width: 60px;
              height: 20px;
              font-size: 14px;
              line-height: 20px;
              color: $colorG;
              &.new-pro {
                background-color: #70cb5c;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            img {
              width: 100%;
              height: 190px;
            }
            p {
              margin: 3px 0;
              color: $colorD;
            }
            .price {
              font-size: $fontJ;
              padding: 10px 0 15px;
              color: #b21223;
              font-weight: bold;
              &:after {
                @include bgimg(20px, 20px, "/imgs/icon-cart-hover.png");
                content: "";
                vertical-align: middle;
                margin-left: 5px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  .addCartBtn {
    background-color: $colorA;
    color: $colorG;
  }
}
.index /deep/ .el-dialog__footer {
  padding: 0;
  height: 80px;
  background-color: $colorJ;
  text-align: center;
  line-height: 80px;
}
.index /deep/ .el-dialog__header {
  padding: 0;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  background-color: $colorJ;
}
.index /deep/ .el-dialog__body {
  height: 40px;
  line-height: 40px;
}
</style>
