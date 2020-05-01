<template>
<div class ="container mCustomScrollbar">
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&family=Noto+Serif+JP:wght@200;600&display=swap" rel="stylesheet">
    </head>
    <body class="animsition">
    <div id="side">
      <Side />
    </div>
  <h1 class="main_t">WORKS</h1>
  <div class="main">
    <div>
    <nuxt-link to="./more/01"><img src="../assets/img/01.webp"></nuxt-link>
    </div>
    <div>
    <nuxt-link to="./more/02"><img src="../assets/img/02.webp"></nuxt-link>
    </div>
    <div>
    <nuxt-link to="/"><img src="../assets/img/06.webp"></nuxt-link>
    </div>
    <div>
    <nuxt-link to="./more/04"><img src="../assets/img/04.webp"></nuxt-link>
    </div>
    <div>
    <nuxt-link to="./more/07"><img src="../assets/img/07.webp"></nuxt-link>
    </div>
    <div>
    <nuxt-link to="/"><img src="../assets/img/03.webp"></nuxt-link>
    </div>
    <div>
    <nuxt-link to="/"><img src="../assets/img/05.webp"></nuxt-link>
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
</script>>

<style scoped>

body{
  background: #f8f8f8 !important;
  color: #272727;
}
.container {
    overflow-y: scroll;
    -ms-overflow-style: none;    /* IE, Edge 対応 */
    scrollbar-width: none;       /* Firefox 対応 */
  }
  .container::-webkit-scrollbar {  /* Chrome, Safari 対応 */
        display:none;
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

/*-------------------------fadeoutcss--------------------------*/

body {
    animation: fadeIn 2s ease 0s 1 normal;
    -webkit-animation: fadeIn 2s ease 0s 1 normal;
}

@keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}

@-webkit-keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}

</style>