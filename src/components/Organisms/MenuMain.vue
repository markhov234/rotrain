<template>
    <nav class="main-menu">
        <router-link class="main-menu-item" to="/">Home
            <span><img src="@/assets/images/home_icon.png" alt=""></span>
        </router-link>
        <router-link class="main-menu-item" to="/training">Training Room
            <span><img src="@/assets/images/train_icon.png" alt=""></span>
        </router-link>
        <router-link class="main-menu-item" to="/profile">Profile
            <span><img src="@/assets/images/profil_icon.png" alt=""></span>
        </router-link>
        <router-link class="main-menu-item" to="/shop">Shop
            <span class="main-menu-item-icons"><img src="@/assets/images/shop-icons.svg" alt=""></span>
        </router-link>
    </nav>
</template>


<script>
export default {
    name: "MenuMain",
    data() {
        return { MenuMain: "MenuMain" };
    },
};
</script>