<template>
  <div class="serviceBar">
    <div class="container">
      <a href=""><span class="icon-setting"></span>预约维修服务</a>
      <a href=""><span class="icon-7day"></span>7天无理由退货</a>
      <a href=""><span class="icon-15day"></span>15天免费换货</a>
      <a href=""><span class="icon-post"></span>满150元包邮</a>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
.serviceBar {
  font-size: 16px;
  color: #666666;
  padding: 30px 0;
  a {
    display: inline-block;
    width: 24.9%;
    text-align: center;
    border-right: 1px solid #e5e5e5;
    cursor: pointer;
    &:hover {
      color: #ff6600;
    }
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 10px;
    }
    .icon-setting {
      @include bgimg(20px, 20px, "/imgs/icon-setting.png");
    }
    .icon-7day {
      @include bgimg(20px, 20px, "/imgs/icon-7day.png");
    }
    .icon-15day {
      @include bgimg(20px, 20px, "/imgs/icon-15day.png");
    }
    .icon-post {
      @include bgimg(20px, 20px, "/imgs/icon-post.png");
    }
  }
}
</style>
