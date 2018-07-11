<template>
    <div class="p-0 h-100 bg-secondary text-white">
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/SlayerPoints" class="nav-link">Slayer</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container-fluid pt-1">
            <router-view></router-view>
        </div>
    </div>
</template>
