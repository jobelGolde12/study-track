<template>
    <div v-if="!todoIsCheck">

        <div class="container p-2 mt-2">
            <h3 class="text-dark fw-bold">New Todo</h3>
        </div>


        <div class="container  mt-5">
            <h5 class="text-dark fw-light">Enter you todo's here</h5>
            <form class="form" @submit.prevent="submitDataFunc">
                <textarea name="todo" id="todo" class="form-control" v-model="taskData.todo"></textarea>


              <div class="row">
                <div class="col-6 col-md-12 col-sm-12">
                      <div class="row mt-3">
                    <div class="col">
                        <p class="text-dark">Select date</p>
                        <input type="date" class="form-control" v-model="taskData.date">
                    </div>
                    <div class="col">
                        <p class="text-dark">Select subject</p>
                        <select name="sbjects" id="subjects" class="form-control" v-model="taskData.subject">
                            <option :value="data.name" v-for="data in subjects" :key="data.index">{{ data.name }}</option>
                        </select>
                    </div>
                </div>


               
                </div>
                <div class="col-6 col-md-12 col-sm-12">
                    <div class="row mt-3">
                    <div class="col">
                        <p class="text-dark">Select time</p>
                        <input type="time" class="form-control" v-model="taskData.time">
                    </div>
                    <div class="col">
                        <p class="text-dark">Action</p>
                        <div class="d-flex flex-row align-items-center gap-2">
                            <router-link to="/" class="btn btn-secondary w-100" >Cancel</router-link>
                            <button class="btn btn-primary w-100">Done</button>
                        </div>
                    </div>
                </div>
                </div>
              </div>



            </form>
        </div>

        
    </div>
    <CheckTodo v-if="todoIsCheck"/>
</template>
<script>
import CheckTodo from './CheckTodo.vue';
export default {
    name: 'addTodo',
    data(){
        return{
            taskData: {
                todo: '',
                time: '',
                date: '',
                subject: '',
                category: ''
            },
            subjects: [],
            todoIsCheck: false,
            actualTaskData: []
            
        }
    },
    components: {
        CheckTodo
    },
    methods: {
        getSubjectsData(){
            let subjectsData = localStorage.getItem('subjectsData')
            let data = JSON.parse(subjectsData);
            this.subjects = data;
        },
        getActualTaskData() {
            const storedData = localStorage.getItem('actualTaskData');
            this.actualTaskData = JSON.parse(storedData);
        },
        getDate(){
            const date = new Date();
            if(date.getDate() === date.getDate()){
                this.taskData.category = 'Today'
            }else if(date.getDate() > date.getDate()){
                this.taskData.category = 'Future'
            }else if(date.getDate() === (date.getDate() +1)){
                this.taskData.category = 'Tommorow'
            }
        },
        submitDataFunc(){
            localStorage.setItem('actualTaskData', JSON.stringify(this.taskData));
            let data = localStorage.getItem('actualTaskData');

            this.taskData.todo = '';
            this.taskData.time = '';
            this.taskData.date = '';
            this.taskData.subject = '';
            this.taskData.category = '';

            console.log(JSON.parse(data))
            this.todoIsCheck = true;
            setTimeout(() => {
            this.todoIsCheck = false;
            },2000)
        }
    },
    mounted(){
        this.getSubjectsData();
        this.getDate();
        this.getActualTaskData();
    }
}
</script>
<style lang="">
    
</style>