<template>
  <div class ="container">
    <head><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"> </head>
  <div class="flexbox">
  <section class="side">
    <img src = "../assets/img/Logo.svg" class = "logo">
    <button><span></span></button>
    <h1><nuxt-link to="/">WORKS</nuxt-link></h1>
    <h1><nuxt-link to="/about">ABOUT</nuxt-link></h1>
    <div class = "border_v"></div>
    <a href="https://twitter.com/mt_book10" target="_blank" class="animsition-link"><h2 class="h2-t">Twitter</h2></a>
    <a href="https://www.facebook.com/YMMT.SUM" target="_blank" class="animsition-link"><h2 class="h2-f">Facebook</h2></a>
    <a href="https://dribbble.com/mt_book10" target="_blank" class="animsition-link"><h2 class="h2-d">Dribbble</h2></a>
  </section>
  </div>
  </div>
</template>

<style scoped>
html{
  color: #272727;
}

@media screen and (max-width: 1023px) {

.logo{
  position: fixed;
  width: 20vw;
  min-width: 150px;
  text-align: center;
  margin: 2rem;
  }

  .side h1 , .side h2{
    display: none;
  }

  button {
  display: block;
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}
button span {
  width: 100%;
  height: 2.5px;
  background: #000;
  display: block;
  margin: 0;
  border-radius: 100px;
  position: relative;
  left: -10px;
  transition: 0.2s cubic-bezier(1, 0.3, 0, 0.3);
}
button span::before {
  content: "";
  width: 100%;
  height: 2.5px;
  background: #000;
  display: block;
  position: absolute;
  top: -200%;
  border-radius: 100px;
  left: 10px;
  transition: 0.2s cubic-bezier(1, 0.3, 0, 0.3);
}
button span::after {
  content: "";
  width: 100%;
  height: 2.5px;
  background: #000;
  display: block;
  position: absolute;
  bottom: -200%;
  border-radius: 100px;
  right: -5px;
  transition: 0.2s cubic-bezier(1, 0.3, 0, 0.3);
}

button:hover span {
  left: 5px;
  transition: 0.4s cubic-bezier(1, 0.3, 0, 0.3);
}
button:hover span::before {
  left: 0;
  transition: 0.4s cubic-bezier(1, 0.3, 0, 0.3);
}
button:hover span::after {
  right: 0;
  transition: 0.4s cubic-bezier(1, 0.3, 0, 0.3);
}

.button-toggled span {
  left: 5px;
  background: transparent;
  top: 5px;
  transition: 0.3s cubic-bezier(1, 0.3, 0, 0.3) !important;
}
.button-toggled span::before {
  left: 0;
  transform-origin: center-left;
  transform: rotate(-45deg);
  bottom: 5px;
  transition: 0.3s cubic-bezier(1, 0.3, 0, 0.3) !important;
}
.button-toggled span::after {
  right: 0;
  transform-origin: center-right;
  transform: rotate(45deg);
  top: -5px;
  transition: 0.3s cubic-bezier(1, 0.3, 0, 0.3) !important;
}

.button-toggled:hover span {
  left: 5px;
}
.button-toggled:hover span::before {
  left: 0;
}
.button-toggled:hover span::after {
  left: 0;
}


}

@media screen and (min-width: 1024px) {

.logo{
   width: 12vw;
   text-align: center;
   margin: 3rem 0 2rem 3vw;
 }
.side {
  height: 100vh;
  width: 25vw;
}
.side h1{
  width: auto;
  margin: 3rem 0 3rem 3vw;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-style: italic;
  transition: .5s;
  letter-spacing: 0.3rem;
}
.side h1:hover{
  width: auto;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  font-style: normal;
}
.side a{
  text-decoration: none !important;
  color: #272727;
}
.side h2{
  margin: 3rem 0 3rem 3vw;
  line-height: 0;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-style: italic;
  font-size: 1.2rem;
  transition: .5s;
}
.side h2:hover{
  width: auto;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  font-style: normal;
}
.side button{
  display: none;
}
.h2-t:hover{
  color: #1da1f2 !important;
}
.h2-f:hover{
  color: #4064ac !important;
}
.h2-d:hover{
  color: #ea4c89 !important;
}
.side {
  padding: 2%;
}
.border_v{
  display: block;
  width: 0.8px;
  background-color: #272727;
  height: 25vh;
  margin: 0 0 0 4vw;
}
 
}

</style>
