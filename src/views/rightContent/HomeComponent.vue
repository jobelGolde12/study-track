<template>
    <div class="main-container">
        
<div class="container mt-4">
    <!-- Today's Activities Section -->
    <div class="activity-header">
        <h4>Subjects</h4>
        <button class="btn btn-primary">New subject</button>
    </div>

    <!-- Your Habits Section -->
    <div class="row">
        <div class="col-md-3">
            <div class="habit-card">
                <img src="../../assets/AP.jpg" alt="Singing">
                <h6>Singing</h6>
            </div>
        </div>
    </div>

    <!-- Reminders Section -->
    <div class="reminders">
        <h5>Reminders</h5>
        <div class="reminder-item">
            <h6>Gym Session Week 3</h6>
            <p class="text-muted">09:00 AM</p>
        </div>
        <div class="reminder-item">
            <h6>Advanced Piano Class</h6>
            <p class="text-muted">11:30 AM</p>
        </div>
        <div class="reminder-item">
            <h6>Project Design Webinar</h6>
            <p class="text-muted">02:00 PM</p>
        </div>
    </div>

    <!-- To Do List Section -->
    <div class="todo-list">
        <h5>To Do List</h5>
        <div class="todo-item d-flex justify-content-between align-items-center">
            <div>Daily Team Meeting</div>
            <input type="checkbox" />
        </div>
        <div class="todo-item d-flex justify-content-between align-items-center">
            <div>UI Research - Phase 2</div>
            <input type="checkbox" />
        </div>
        <div class="todo-item d-flex justify-content-between align-items-center">
            <div>Meeting with Client</div>
            <input type="checkbox" />
        </div>
    </div>
</div>

    </div>
</template>
<script>
export default {
    name: 'homeComponent',
    data(){
        return{}
    },
    mounted(){
        let getData = localStorage.getItem('taskData');
        console.log(JSON.parse(getData));
        let data = this.$route.params.data;
        console.log('the Data is ' + data);
    }
}
</script>
<style lang="css" scoped>
     .card {
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
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
        .habit-card {
            padding: 15px;
            border-radius: 12px;
            background-color: white;
            text-align: center;
        }
        .habit-card h6 {
            margin-top: 10px;
            font-weight: 600;
        }
        .reminders, .todo-list {
            margin-top: 30px;
        }
        .reminder-item, .todo-item {
            padding: 15px;
            border-radius: 12px;
            background-color: white;
            margin-bottom: 15px;
        }
</style>