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
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

      </div>
      <div class="adv-box"></div>
      <div class="banner-box"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
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
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }

      },
      swiperList: [
        { id: '42', img: '/imgs/slider/slide-1.jpg' },
        { id: '45', img: '/imgs/slider/slide-2.jpg' },
        { id: '46', img: '/imgs/slider/slide-3.jpg' },
        { id: '47', img: '/imgs/slider/slide-4.jpg' },
        { id: '48', img: '/imgs/slider/slide-5.jpg' }
      ],
      phoneList: [
        [
          { id: '30', name: '小米cc9', img: '/imgs/item-box-1.png' },
          { id: '31', name: '小米8青春版', img: '/imgs/item-box-2.png' },
          { id: '32', name: 'Redmi k20 Pro', img: '/imgs/item-box-3.jpg' },
          { id: '33', name: '移动4G专区', img: '/imgs/item-box-4.jpg' }
        ], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ]

    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-list {
      width: 234px;
      height: 460px;
      background-color: #55585a7a;
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
            // display: none;
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
}
</style>
