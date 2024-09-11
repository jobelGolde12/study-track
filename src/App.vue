<template>
  <div class="home bg-dark row" v-if="!welcome">
   <LeftVue class="left col-3 bg-light" />
   <div class="right col-9 bg-success">
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
}

</style>
