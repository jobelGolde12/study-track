<template>
    <div>
        <h1>This is the edit component</h1>
    </div>
</template>
<script>
export default {
    name: 'editTodo',
    data(){
        return{
            data: this.$route.params.data
        }
    },
    methods: {
        getTodoData(){
            console.log('Data => ' + this.data)
        }
    },
    mounted(){
        this.getTodoData();
    }
}
</script>
<style lang="">
    
</style>