<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand">
                <img src="../assets/SedibeloTechnologies.png" width="30" height="30" class="d-inline-block align-top" alt="">
                Sedibelo Technologies
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-link active">PieChart</router-link>
                    <router-link to="/bargraph" class="nav-link">BarGraph</router-link>
                    <router-link to="/users" class="nav-link">Users</router-link>
                </div>
            </div>
        </div>
    </nav>

    <router-view />
</template>

<script>
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
</script>


<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';

.nav-link:active {
background-color: #077c0d;
}

@media only screen and (max-width: 600px) {
    nav {
        font-size: 10px;
    }
    .navbar-brand{
        font-size: 10px; 
    }
}
</style>