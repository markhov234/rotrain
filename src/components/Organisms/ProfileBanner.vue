<template>
    <RouterLink to="Profile" class="profile-banner">
        <div class="info">
            <p class="username">{{ accountStore.username }}</p>
            <p class="rank">{{ accountStore.rolename }}</p>
        </div>
        <div class="level">
            <p>LVL : <span class="number">{{ accountStore.level }}</span></p>
            <span class="exp-bar" :style="{ '--after-width': afterWidth }"></span>
        </div>
        <div class="avatar">
            <img :src="require(`@/assets/images/${accountStore.profileAvatarSmall}`)" alt="">
        </div>
    </RouterLink>
</template>

<script>
import { useAccountStore } from "@/store/modules/AccountStore.js";
import { computed } from 'vue'; // Import computed from Vue

export default {
    name: 'ProfileBanner',
    setup() {
        const accountStore = useAccountStore();
        const afterWidth = computed(() => `${accountStore.experience}%`);
        return { accountStore, afterWidth };
    }
};
</script>

<style scoped>
.exp-bar::after {
    width: var(--after-width);
}
</style>
