<template>
<div class ="container">
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&family=Noto+Serif+JP:wght@200;600&display=swap" rel="stylesheet">
    </head>
    <body class="animsition">
    <div id="side">
      <Side />
    </div>
  <h1 class="main_t">WORKS</h1>
  <div class="main">
    <div data-aos="fade-up">
    <nuxt-link to="./more/01"><img src="~/assets/img/01-min.png"></nuxt-link>
    </div>
    <div data-aos="fade-up">
    <nuxt-link to="./more/02"><img src="~/assets/img/02-min.png"></nuxt-link>
    </div>
    <div data-aos="fade-up">
    <nuxt-link to="./more/11"><img src="~/assets/img/11-min.png"></nuxt-link>
    </div>
    <div data-aos="fade-up">
    <nuxt-link to="./more/08"><img src="~/assets/img/08-min.png"></nuxt-link>
    </div>
    <div data-aos="fade-up">
    <nuxt-link to="./more/04"><img src="~/assets/img/04-min.png"></nuxt-link>
    </div>
    <div data-aos="fade-up">
    <nuxt-link to="./more/07"><img src="~/assets/img/07-min.png"></nuxt-link>
    </div>
    <div data-aos="fade-up">
    <a href="https://prock.netlify.app" target="_blank"><img src="~/assets/img/10-min.png"></a>
    </div>
    <div data-aos="fade-up">
    <a href="https://bizapp.robot.softbank.jp/shopdetail/000000000144/" target="_blank"><img src="~/assets/img/06-min.png"></a>
    </div>
    <div data-aos="fade-up">
    <nuxt-link to="./more/09"><img src="~/assets/img/09-min.png"></nuxt-link>
    </div>
    <div data-aos="fade-up">
    <a href="https://mtbook1010.github.io/portfolio_2/" target="_blank"><img src="~/assets/img/05-min.png"></a>
    </div>
    </div>
  </body>
</div>
</template>

<script>
export default {
  components: {
    Side: () => import('~/components/side')
  }
}
</script>

<style scoped>

@media screen and (max-width: 1023px) {

#side{
  position: fixed;
  z-index: 9996;
}
.main_t{
  position: fixed;
  top: 4rem;
  right: 5vw;
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  font-size: 5rem;
  color: #dadada;
  letter-spacing: 0.5rem;
}
.main{
  display: block;
  position: relative;
  margin: auto;
  margin-bottom: 8rem;
  width: 75vw;
}
.main div img {
  display: inline-block;
  margin: 8rem 0 -6rem 0;
  width: 100%;
  opacity: .7;
  transition: .5s;
}
.main div img:hover {
  opacity: 1;
}

}

@media screen and (min-width: 1024px) {

#side{
  position: fixed;
}
.main_t{
  position: fixed;
  top: 3rem;
  right: 6rem;
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  font-size: 10vw;
  color: #dadada;
}
.main{
  position: absolute;
  top: 10rem;
  right: 3rem;
  width: 75vw;
  column-count: 2;
  column-gap: 2rem;
}
.main div{
  position: relative;
}
.main div img {
  display: inline-block;
  margin: 0 0 2rem;
  width: 100%;
  opacity: .7;
  transition: .5s;
}
.main div img:hover {
  opacity: 1;
}

}

</style>