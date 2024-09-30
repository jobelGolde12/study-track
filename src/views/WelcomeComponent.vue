<template>
    <div class="main-container">
       <div class="icon-container pt-5 d-flex flex-row justify-content-center align-ites-center">
        <img src="../assets/taskIcon.svg" alt="Task icon" class="task-icon">
       </div>

       <div class="container-fluid d-flex flex-column justify-content-center align-ites-center">
        <div class="text-banner">
            <h3 class="text-dark text-center fw-bolder mb-0 pb-0">Welcome to Study Track</h3>
            <p class="text-dark fw-normal text-center">Organize your task easily!</p>

           <div class="container pt-3 d-flex flex-column justify-content-center align-ites-center">
            <button class="btn btn-primary get-started" @click="getStartedFunc">Get Started!</button>
           </div>
        </div>
       </div>
    </div>
</template>
<script>
export default {
    name: 'welcomeComponent',
    data(){
        return{

        }
    },
    methods: {
        getStartedFunc(){
            console.log('clicked')
            this.$emit('toggleWelcome', false);
        }
    }
}
</script>
<style lang="css" scoped>
    .main-container{
        width: 100vw;
        height: 100vh;
        background: rgb(0,212,255);
        background: linear-gradient(176deg, rgba(0,212,255,1) 35%, rgba(255,255,255,1) 100%);
        z-index: 999;
    }
    .icon-container{
        width: 100vw;
    }
    .task-icon{
        position: relative;
        height: 60vh;
        width: 60vw;
    }
    .get-started{
        width: 30%;
        align-self: center;
    }
    @media screen and (max-width: 750px){
    .task-icon{
        position: relative;
        height: 50vh;
        width: 50vw;
        margin-bottom: 2rem;
    }
    }
</style>