<template>
  <div class="m-nav" >
    <ul class="nav" style="margin:0">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/order">我的美团</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/order">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">商家中心</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/userCenter">登录商家</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/coop">我想合作</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/wap">免费手机开店</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/kaipiao">商家申请开票</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/site">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>吃烧烤</dd>
            <dd>吃烧烤</dd>
            <dd>吃烧烤</dd>
            <dd>吃烧烤</dd>
            <dd>吃烧烤</dd>
            <dd>吃烧烤</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="#">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>

</style>