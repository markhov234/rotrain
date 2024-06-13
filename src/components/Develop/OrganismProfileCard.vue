<template>
    <div class="profile-card-border">
        <div class="profile-card-image">
            <img :src="require(`@/assets/images/${accountStore.profileAvatarLargeSrc}`)" alt="">
            <div class="profile-card-header">
                <div class="info">
                    <p class="profile-card-username">{{ accountStore.username }}</p>
                    <p class="profile-card-rank">{{ accountStore.rolename }}</p>
                </div>
                <p class="profile-card-level">{{ accountStore.level }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useAccountStore } from "@/store/modules/AccountStore.js";

export default {
    name: 'OrganismProfileCard',
    setup() {
        const accountStore = useAccountStore();
        return { accountStore };
    },
};
</script>
