<template>
    <div class="main-container d-flex flex-row justify-content-center align-items-center">
        <div class="checkTodo p-5"></div>
    </div>
</template>
<script>
export default {
    name: 'checkTodo'
}
</script>
<style lang="css" scoped>
.main-container{
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background: #fff;
}
.main-container .checkTodo{
    background: url('../../assets/checkTodo.gif');
    width: 30%;
    height: 30%;
    background-size: cover;
    background-position: center;
    position: relative;
    transform: translateX(-30%);

}
</style>