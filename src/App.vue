<template>
  <div class="home flex-row align-items-center bg-light" v-if="!welcome">
   <LeftVue class="left bg-light" @toggleSidenav="toggleSidenav"/>
   <div class="right bg-light">
    <router-view></router-view>
   </div>
  </div>

  <WelcomeVue v-if="welcome" @toggleWelcome="toggleWelcome"/>
</template>

<script>
// @ is an alias to /src
import LeftVue from './views/LeftComponent.vue';
import WelcomeVue from './views/WelcomeComponent.vue';

export default {
  name: 'App',
  data(){
    return{
      welcome: true
    }
  },
  components: {
    LeftVue, WelcomeVue
  },
  methods: {
    toggleWelcome(data){
      this.welcome = data;
    },
    toggleSidenav(){
      let right = document.querySelector('.right');
      right.style.width = '100%';
      console.log('toggle sidenav in App.vue called');
    }
  }
}
</script>

<style>
@import './cssFolder/global.css';
.home{
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  left: 0;
  top: 0;
}
.home .left{
  position: relative;
  width: 23%;
  height: 100%;
}
.home .right{
  position: relative;
  width: 77%;
  height: 100%;
}
@media screen and (max-width: 750px){

 .home .left{
    display: none;
  }
  .home .right{
    position: relative;
    width: 100% !important;
    height: 100% !important;
    left: 0;
  }
}
</style>
