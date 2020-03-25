<template>
  <div>
    <div class="footer">
      <div class="footer-logo">
        <img src="imgs/logo-footer.png" alt="">
        <p>小米商城</p>
      </div>
      <div class="footer-link">
        <a href="https://www.mi.com/" target="_blank">小米商城</a><span>|</span>
        <a href="https://www.mi.com/" target="_blank">小米天猫店</a><span>|</span>
        <a href="https://www.mi.com/" target="_blank">米家</a><span>|</span>
        <a href="https://www.mi.com/" target="_blank">小米商城隐私政策</a><span>|</span>
        <a href="https://www.mi.com/" target="_blank">问题反馈</a>
      </div>
      <div class="footer-copy">
        <p>Copyright @2020 <span class="footer-copy-color">www.mi.com</span> By Sakura</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-footer'
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #333333;
  height: 230px;
  border-top: 4px solid #ff6600;
  font-size: 16px;
  color: #999999;
  text-align: center;
  .footer-logo {
    margin-top: 40px;
    margin-bottom: 40px;
    img {
      width: 53px;
      height: 36px;
    }
  }
  .footer-link {
    margin-bottom: 10px;
    a {
      color: #999999;
      margin-right: 10px;
      margin-left: 10px;
      &:hover {
        color: #ff6600;
      }
    }
  }
  .footer-copy {
    margin-top: 20px;
    .footer-copy-color {
      color: #ff6600;
    }
  }
}
</style>
