<template>
    <div class="main-container p-4">
        <div class="d-flex flex-row justify-content-between align-items-center">
            <h4 class="text-dark fw-bold">StudyTrack</h4>
            <router-link to="settingsComponent" class="bi bi-gear fw-bolder d-block fs-5 settings"></router-link>
        </div>
         
        <router-link to="/" class="btn home-nav w-100 mt-2" :class="{'btn-primary' : $route.path=='/', 'btn-secondary' : $route.path !=='/'}">HOME</router-link>
        <div class="d-flex flex-column mt-4">
            <div><h5 class="text-dark fw-light ">Task</h5></div>
            <router-link to="/upcoming" class="text-decoration-none pointer task-list p-2 rounded d-flex flex-row align-items-center" :class="{'bg-primary text-light': $route.path == '/upcoming', 'text-dark' : $route.path !== '/upcoming'}"><i class="bi bi-box-arrow-in-right me-2"></i> Upcoming <span class="ms-1 fw-bold" :class="{'text-primary' : $route.path !== '/upcoming'}">{{ taskData.upcoming }}</span></router-link>
            <div class="pointer task-list p-2 rounded d-flex flex-row align-items-center"><i class="bi bi-list-check me-2 text-dark"></i> Today <span class="ms-1 fw-bold text-primary">{{ taskData.today }}</span></div>
            <div class="pointer task-list p-2 rounded d-flex flex-row align-items-center"><i class="bi bi-check me-2 text-dark"></i> Finished <span class="ms-1 fw-bold text-primary">{{ taskData.done }}</span></div>

        </div>



        <div class="d-flex flex-column mt-3">
            <div><h5 class="text-dark fw-light ">Subjects</h5></div>
           <div v-for="data in subjectsData" :key="data.index" class=" subjects-container">
            <div class="pointer subjects-list p-2 rounded d-flex flex-row align-items-center"> {{data.name}} <span class="ms-1 fw-bold text-primary">{{ data.upcoming }}</span></div>
           </div>
        </div>




    </div>
</template>
<script>
export default {
    name: 'leftSmallScreen',
    data(){
        return{
            taskData: {
                id: '',
                upcoming: 0,
                today: 0,
                done: 0,
                myCalindar: 0
            },
            subjectsData: [
                {
                    name: 'Math',
                    upcoming: 0,
                    today: 0,
                    done: 0
                },
                {
                    name: 'English',
                    upcoming: 0,
                    today: 0,
                    done: 0
                },
                {
                    name: 'TLE',
                    upcoming: 0,
                    today: 0,
                    done: 0
                },
                {
                    name: 'Science',
                    upcoming: 0,
                    today: 0,
                    done: 0
                },
                {
                    name: 'Filipino',
                    upcoming: 0,
                    today: 0,
                    done: 0
                },
                {
                    name: 'AP',
                    upcoming: 0,
                    today: 0,
                    done: 0
                }
            ]
        }
    },
    methods: {
        setIntoLocalStorage(){
            localStorage.setItem('taskData', JSON.stringify(this.taskData));
            localStorage.setItem('subjectsData', JSON.stringify(this.subjectsData));

        },
        toggleSidenav(){
            let mainContainer = document.querySelector('.main-container');
            mainContainer.style.left = '-100%';
            this.$emit('toggleSidenav', true);            
        }
    },
    mounted(){
        this.setIntoLocalStorage();
    }
}
</script>
<style lang="css" scoped>
.task-list:hover, .subjects-list:hover{
background: #ccc;
}
.settings{
    transform: translateY(-15%);
}
.main-container{
    overflow-y: scroll;
}

.main-container::-webkit-scrollbar {
display: none; 
}
</style>