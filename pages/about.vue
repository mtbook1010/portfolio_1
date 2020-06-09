<template>
<div class ="container">
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&family=Noto+Serif+JP:wght@200;600&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" crossorigin="anonymous"></script>
    </head>
  <body>
    <div id="side">
      <Side />
    </div>
  <h1 class="main_t">ABOUT</h1>
  <div class="main">
    <div class = "gauguin"><p>美には二つの種類がある。<br>一つは本能から生まれてくるもの、<br>もう一つは入念な研究の結果から生まれるもの。<br><span>- ゴーギャン</span></p></div>
  <div id="profile">
    <section>
      <h1>PROFILE</h1>
      <span class = "myname">山本 匠真　<span>|</span>　Shoma Yamamoto</span><br>
      <span class = "myprofile">北海道生まれ東京育ち<br>企業やサービスなどのロゴデザイン・WEBデザインを主としてWordPressサイト・オリジナルサイトなども制作している。</span>
      <div class="contact">
        <a href="mailto:mt_book@outlook.jp"><h2><span>></span> CONTACT</h2></a>
      </div>
    </section>
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

@media screen and (max-width: 1023px) {

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
  position: relative;
  right: 3rem;
  width: 100vw;
}
.gauguin{
  position: relative;
  width: 100vw;
  height: 100vh;
}
.gauguin p{
  position: absolute;
  width: 60%;
  top: 50%;
  left: 60%;
  transform: translateY(-50%) translateX(-50%);
  font-family: 'Noto Serif JP';
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.4rem;
  line-height: 2.5rem;
}
.gauguin span{
  font-weight: 200;
  font-size: 1rem;
}
.main #profile{
  display: block;
  position: relative;
  width: 100vw;
  height: 100vh;
}

.main #profile section {
  position: absolute;
  width: 60%;
  top: 50%;
  left: 60%;
  transform: translateY(-50%) translateX(-50%);
}

.main .myname{
  display: block;
  width: auto;
  margin-left: 5%;
  font-family: 'Noto Serif JP';
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.2rem;
}
.main .myname span{
  font-weight: 200;
  color: #999999;
}
.main .myprofile{
  display: block;
  width: 100%;
  max-width: 380px;
  margin-left: 5%;
  line-height: 2;
  font-family: 'Noto Serif JP';
  font-weight: 200;
  text-align: left;
  font-size: 0.7rem;
  letter-spacing: 0.2rem;
}
.contact{
  display: inline-block;
  position: relative;
  margin-bottom: 0vw;
}
.contact a{
  text-decoration: none;
  color: #272727 !important;
}
#profile h1{
  margin: 3rem 0 1.5rem 0;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  letter-spacing: 0.3rem;
}
.contact h2{
  margin: 2rem 0 1.5rem 0;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400 !important;
  font-style: italic;
  letter-spacing: 0.3rem;
  transition: .5s;
}
.contact h2:hover{
  font-weight: 700 !important;
  font-style: normal;
}
.contact span{
  font-weight: 700;
  font-style: normal;
}

}

@media screen and (min-width: 1024px) {

#side{
  position: fixed;
  z-index: 9997;
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
  letter-spacing: 1rem;
}
.main{
  position: absolute;
  top: 18vw;
  right: 3rem;
  width: 75vw;
  height: 80vh;
}
.gauguin{
  position: absolute;
  top: 0rem;
  left: 10%;
  font-family: 'Noto Serif JP';
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.4rem;
  line-height: 5rem;
}
.gauguin span{
  font-weight: 200;
  font-size: 1rem;
}
.main #profile{
  position: absolute;
  top: 80%;
  left: 10%;
}
.main .myname{
  display: block;
  width: auto;
  margin-left: 5%;
  font-family: 'Noto Serif JP';
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.2rem;
}
.main .myname span{
  font-weight: 200;
  color: #999999;
}
.main .myprofile{
  display: block;
  width: 380px;
  margin-left: 5%;
  line-height: 2;
  font-family: 'Noto Serif JP';
  font-weight: 200;
  text-align: left;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
}
.contact{
  display: block;
  margin-bottom: 18vw;
}
#profile h1{
  margin: 3rem 0 1.5rem 0;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  letter-spacing: 0.3rem;
}
.contact h2{
  margin: 2rem 0 1.5rem 0;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400 !important;
  font-style: italic;
  letter-spacing: 0.3rem;
  transition: .5s;
}
.contact h2:hover{
  font-weight: 700 !important;
  font-style: normal;
}
.contact span{
  font-weight: 700;
  font-style: normal;
}
.contact a{
  text-decoration: none;
  color: #272727 !important;
}

}
</style>
