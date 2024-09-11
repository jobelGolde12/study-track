<template>
    <div class="main-container p-4">
        <div>
            <h4 class="text-dark fw-bold"><i class="bi bi-list me-3 fw-bold pointer"></i>StudyTrack</h4>
        </div>

        <div class="d-flex flex-column mt-5 ">
            <div><h5 class="text-dark fw-light ">Task</h5></div>
            <div class="pointer task-list p-2 rounded d-flex flex-row align-items-center"><i class="bi bi-box-arrow-in-right me-2 text-dark"></i> upcoming <span class="ms-1 fw-bold text-primary">{{ taskData.upcoming }}</span></div>
            <div class="pointer task-list p-2 rounded d-flex flex-row align-items-center"><i class="bi bi-list-check me-2 text-dark"></i> today <span class="ms-1 fw-bold text-primary">{{ taskData.today }}</span></div>
            <div class="pointer task-list p-2 rounded d-flex flex-row align-items-center"><i class="bi bi-check me-2 text-dark"></i> done <span class="ms-1 fw-bold text-primary">{{ taskData.done }}</span></div>
            <div class="pointer task-list p-2 rounded d-flex flex-row align-items-center"><i class="bi bi-calendar-event me-2 text-dark"></i> my calindar <span class="ms-1 fw-bold text-primary">{{ taskData.myCalindar }}</span></div>

        </div>



        <div class="d-flex flex-column mt-3 ">
            <div><h5 class="text-dark fw-light ">Subjects</h5></div>
            <div class="pointer subjects-list p-2 rounded d-flex flex-row align-items-center"><i class="bi bi-box-arrow-in-right me-2 text-dark"></i> upcoming <span class="ms-1 fw-bold text-primary">{{ taskData.upcoming }}</span></div>
            <div class="pointer subjects-list p-2 rounded d-flex flex-row align-items-center"><i class="bi bi-list-check me-2 text-dark"></i> today <span class="ms-1 fw-bold text-primary">{{ taskData.today }}</span></div>
            <div class="pointer subjects-list p-2 rounded d-flex flex-row align-items-center"><i class="bi bi-check me-2 text-dark"></i> done <span class="ms-1 fw-bold text-primary">{{ taskData.done }}</span></div>
            <div class="pointer subjects-list p-2 rounded d-flex flex-row align-items-center"><i class="bi bi-calendar-event me-2 text-dark"></i> my calindar <span class="ms-1 fw-bold text-primary">{{ taskData.myCalindar }}</span></div>

        </div>




    </div>
</template>
<script>
export default {
    name: 'leftSidebarComponent',
    data(){
        return{
            taskData: {
                upcoming: 0,
                today: 0,
                done: 0,
                myCalindar: 0
            }
        }
    }
}
</script>
<style lang="css" scoped>
.task-list:hover, .subject-list:hover{
background: #ccc;
}
</style>