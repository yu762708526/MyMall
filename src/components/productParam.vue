<template>
  <div>
    <div class="productParam" :class="{'is_fixed':isFixed}">
      <div class="container">
        <div class="param-left">
          <h3>{{title}} 透明探索版</h3>
          <span>|</span>
          <a href="javascript:;">{{title}}</a>
          <span>|</span>
          <a href="javascript:;">{{title}} SE</a>
        </div>
        <div class="param-right">
          <a href="javascript:;">概述</a>
          <span>|</span>
          <a href="javascript:;">参数</a>
          <span>|</span>
          <a href="javascript:;">用户评价</a>
          <a href="javascript:;" class="buyNow" @click="buy">立即购买</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productParam',
  props: {
    title: String // 把json变成字符串
  },
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    // 吸顶方法
    initHeight () {
      const scrollTop = window.pageYOffset || window.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > 140
    },
    buy () {
      const id = this.$route.params.id
      this.$router.push('/detail/' + id)
    }
  },
  // 移除吸顶
  destroyed () {
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.productParam {
  border-top: 1px solid $colorF;
  background-color: $colorG;
  z-index: 10;
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0px 5px 10px $colorE;
  }
  .container {
    @include flex();
    height: 50px;
    .param-left {
      display: flex;
      align-items: center;
      span {
        margin: 0 10px;
        color: $colorE;
      }
      a {
        color: $colorB;
        &:hover {
          color: $colorA;
        }
      }
    }
    .param-right {
      span {
        margin: 0 10px;
        font-size: 16px;
        color: $colorE;
      }
      a {
        font-size: 14px;
        color: $colorB;
        &:hover {
          color: $colorA;
        }
      }
      .buyNow {
        display: inline-block;
        width: 100px;
        height: 30px;
        background-color: $colorA;
        text-align: center;
        line-height: 30px;
        color: $colorG;
        font-size: 12px;
        margin-left: 10px;
        &:hover {
          color: $colorG;
        }
      }
    }
  }
}
</style>
