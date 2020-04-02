<template>
  <div class="product">
    <product-param :title="productInfoList.name"></product-param>
    <div class="itemBg1">
      <h2>{{productInfoList.name}}</h2>
      <h3>{{productInfoList.subtitle}}</h3>
      <div class="info">
        <a href="javascript:;">全球首款双频 GP</a>
        <span>|</span>
        <a href="javascript:;">骁龙845</a>
        <span>|</span>
        <a href="javascript:;">AI 变焦双摄</a>
        <span>|</span>
        <a href="javascript:;">红外人脸识别</a>
      </div>
      <div class="price">
        <span>￥{{productInfoList.price}}</span>
      </div>
    </div>
    <div class="itemBg2"></div>
    <div class="itemBg3"></div>
    <div class="itemSwiper">
      <swiper :options="swiperOptions">
        <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <p>小米8 AI变焦双摄拍摄</p>
    </div>
    <div class="item-video">
      <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
      <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
      <div class="video-bg" @click="showSlide = true"></div>
      <div class="video-box">
        <div class="overlay" v-if="showSlide"></div>
        <div class="video" :class="{'slide':showSlide}">
          <span class="close" @click="showSlide = false"></span>
          <video src="/imgs/product/video.mp4" controls autoplay muted></video>
          <!-- controls 播放按钮 autoplay 自动播放 -->
          <!-- muted 静音输出为了自动播放成功 -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productParam from '../components/productParam'
export default {
  name: 'product',
  components: {
    productParam
  },
  data () {
    return {
      showSlide: false,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: true,
        loop: true,
        slidesPerView: 3, // 一行放三张图片
        spaceBetween: 30, // 每张图片之间间隔的距离
        freeMode: true // 滑动图片时不是固定一整张图片
      },
      productInfoList: {} // 获取到的产品信息
    }
  },
  mounted () {
    this.getProductInfo()
  },
  methods: {
    getProductInfo () {
      const id = this.$route.params.id
      this.axios.get('/products/' + id).then((res) => {
        this.productInfoList = res
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.product {
  .itemBg1 {
    background: url("/imgs/product/product-bg-1.png") no-repeat center;
    height: 700px;
    text-align: center;
    h2 {
      font-size: 70px;
      padding-top: 50px;
    }
    h3 {
      font-size: 20px;
      padding-top: 8px;
      letter-spacing: 10px;
    }
    .info {
      padding-top: 20px;
      a {
        color: $colorB;
        font-weight: bold;
        font-size: 14px;
      }
      span {
        margin: 0 10px;
      }
    }
    .price {
      padding-top: 30px;
      span {
        font-size: 40px;
        font-style: normal;
      }
    }
  }
  .itemBg2 {
    background: url("/imgs/product/product-bg-2.png") no-repeat center;
    height: 450px;
    width: 100%;
    background-size: 1226px 450px;
  }
  .itemBg3 {
    background: url("/imgs/product/product-bg-3.png") no-repeat center;
    height: 600px;
    background-size: cover;
  }
  .itemSwiper {
    margin-top: 30px;
    margin-bottom: 60px;
    img {
      width: 100%;
    }
    p {
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }
  }
  .item-video {
    background-color: $colorI;
    height: 1100px;
    color: $colorG;
    margin-bottom: 60px;
    text-align: center;
    h2 {
      font-size: 50px;
      line-height: 80px;
      padding-top: 70px;
    }
    p {
      font-size: 20px;
      padding-top: 40px;
      color: $colorG;
      line-height: 30px;
      margin-bottom: 20px;
    }
    .video-bg {
      background: url("/imgs/product/gallery-1.png") no-repeat center;
      height: 700px;
      background-size: contain;
      margin: 0 30px;
    }
    .video-box {
      .overlay {
        @include position(fixed);
        background-color: $colorI;
        opacity: 0.4;
        z-index: 100;
      }
      .video {
        position: fixed;
        top: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        opacity: 0;
        transition: all 0.6s;
        &.slide {
          top: 50%;
          opacity: 1;
        }
        .close {
          position: absolute;
          top: 20px;
          right: 70px;
          @include bgimg(20px, 20px, "/imgs/icon-close.png");
          cursor: pointer;
          z-index: 110;
        }
        video {
          width: 1000px;
          height: 500px;
          object-fit: cover; //跟background-sizel:contain效果差不多
          outline: none; //防止层叠干扰
        }
      }
    }
  }
}
</style>
