<template>
<div class="main-container">

    <div class="container mt-4">
        <div class="activity-header">
            <h4>Subjects</h4>
            <router-link to="/newSubject" class="btn btn-primary">New subject</router-link>
        </div>

        <div class="container-fluid d-flex flex-row gap-2 subjectsContainer">
            <div class="dataHolder" v-for="data in subjectsData" :key="data.index">
                <img src="../../assets/AP.jpg" alt="AP subject" v-if="data.name == 'AP'">
                <img src="../../assets/math.jpg" alt="Math subject" v-if="data.name == 'Math'">
                <img src="../../assets/filipino.jpg" alt="Filipino subject" v-if="data.name == 'Filipino'">
                <img src="../../assets/english.png" alt="English subject" v-if="data.name == 'English'">
                <img src="../../assets/science.jpg" alt="Science subject" v-if="data.name == 'Science'">
                <img src="../../assets/TLE.jpg" alt="TLE subject" v-if="data.name == 'TLE'">

                <h6 class="bg-primary text-light p-1">{{ data.name }}</h6>
            </div>
        </div>

<div class="new-todo-button-container">
    <router-link to="/addTodo" class="btn btn-primary align-self-end"><i class="bi bi-plus fw-bolder fs-2"></i></router-link>
</div>
        <div class="row mt-3">
            <div class="col-12 col-lg-6">
                <h5 class="">Today</h5>
                <div class="todos d-flex flex-column gap-2 justify-content-start">
                    <div class="container todo-container rounded d-flex flex-row gap-2 align-items-center pointer" v-for="(data,index) in actualTodoData" :key="index" @click="editTodoFunc(index)" data-bs-toggle="modal" data-bs-target="#editTodo">
                        <p class="text-bold d-block">{{ data.todo }}</p>
                        <p class="d-none">{{index}}</p>
                    </div>

                </div>
            </div>

                <div class="col-12 col-lg-6 upcoming">
                    <h5 class="">Upcoming</h5>
                    <div class="upcoming-todos d-flex flex-column gap-2 justify-content-start">
                        <div class="container todo-container rounded d-flex flex-row gap-2 align-items-center pointer">
                            <input type="checkbox" class="pointer d-block">
                            <p class="text-bold d-block">Todo name</p>
                        </div>

                    </div>
                </div>
            </div>

            <div class="container-fluid">
                        <h5 class="text-dark">Finished</h5>
                       <div class="finished d-flex flex-column gap-2 justify-content-start">
                            <div class="container todo-container rounded d-flex flex-row gap-2 align-items-center pointer" v-for="(data,index) in finished" :key="index">
                                <input type="checkbox" class="pointer d-block">
                                <p class="text-bold d-block">{{ data.todo }}</p>
                                <p class="d-none">{{index}}</p>
                                asdasd
                            </div>

                        </div>
                    </div>


        </div>



                    <!-- Para sa edit todo  -->


                    <div class="modal fade" id="editTodo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit you todo</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input v-model="editTodoData.todo" class="form-control" placeholder="Edit your todo">
                        <input type="checkbox" class="pointer d-block" @change="finishedTodoFunc(index)">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>


                  

    </div>
</template>

<script>
export default {
    name: 'homeComponent',
    data() {
        return {
            subjectsData: [],
            actualTodoData: [],
            editTodoData: [],
            finished: []
        }
    },
    methods: {
        getActualTodoData(){
            let data = localStorage.getItem('actualTaskData');
        if (data) {
            this.actualTodoData = JSON.parse(data); 
        }
        console.log("Actual todo data from home=> ", this.actualTodoData);

        for(let i = 0; i < this.actualTodoData.length; i++){
            console.log('Data from for loop: ' + this.actualTodoData[i].todo);
        }
        },
        editTodoFunc(index){
            this.editTodoData = this.actualTodoData[index];
            console.log("The edit todo data is  " + this.editTodoData + ' at index of ' + index);
        },
        finishedTodoFunc(index){
            this.finished.push(this.subjectsData[index]);
            let data = this.subjectsData.splice(index, 1)
            console.log(data)
        }
    },
    mounted() {
        let getData = localStorage.getItem('taskData');
        console.log(JSON.parse(getData));

        let getSubjectsData = localStorage.getItem('subjectsData');

        if(getSubjectsData){
            this.subjectsData = JSON.parse(getSubjectsData);
        }
        this.getActualTodoData();
    }
}
</script>

<style lang="css" scoped>
.main-container{
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-y: scroll;
}

.activity-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.habit-card img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
}

.subjectsContainer {
    max-width: 100%;
    overflow-x: scroll;
}

.subjectsContainer::-webkit-scrollbar {
    display: none;
}

.subjectsContainer .dataHolder {
    min-width: 100px !important;
    min-height: 100px !important;
}

.subjectsContainer .dataHolder img {
    width: 100%;
    height: 100%;
    position: relative;
}

.dataHolder h6 {
    position: relative;
    text-align: center;
    transform: translateY(-100%);
    border-radius: 20px 20px 0 0;
}

.todos {
    width: 100%;
    height: 300px;
    overflow-y: scroll;
    position: relative;
}

.todos .todo-container {
    background: lightblue;
}
.todos .todo-container:hover, .upcoming-todos .todo-container:hover{
    background: #ccc;
}

.todos .todo-container p , .upcoming-todos .todo-container p{
    transform: translateY(25%);
}

.todos::-webkit-scrollbar {
display: none; 
}
.upcoming-todos::-webkit-scrollbar {
display: none; 
}
.upcoming-todos .todo-container{
    background: lightblue;
}
.new-todo-button-container{
    position: fixed;
    display: flex;
    bottom: 3%;
    right: 10%;
    justify-content: center;
    align-items: center;
    width: 0;
    height: 0;
    background: #ccc;
    border-radius: 50%;
    z-index: 999;
}
.new-todo-button-container .btn{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 1s animateNewTodoBtn ease infinite;
}
/* @media screen and (max-width: 1024px){
    .upcoming{
        position: relative;
        transform: translateY(-10%);
    }
} */
@keyframes animateNewTodoBtn{
    from{
        width: 50px;
        height: 50px;
    }
    to{
        width: 55px;
        height: 55px;
    }
}
@keyframes animateNewTodoContainer{
    from{
        width: 0;
        height: 0;
    }
    to{
        width: 100px;
        height: 100px;
    }
}
</style>
