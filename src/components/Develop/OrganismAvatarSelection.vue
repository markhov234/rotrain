<template>
    <div class="profile-avatar-selection">
        <div v-for="avatarLarge in accountStore.avatars" :key="avatarLarge.id" :class="[
            'profile-avatar-section',
            avatarLarge.locked ? 'locked' : 'unlocked',
            { 'selected': avatarLarge.id === accountStore.profileAvatarLarge },
            { 'focus': avatarLarge.id === focusedAvatarId }
        ]" @click="setFocusedAvatar(avatarLarge.id)">
            <Transition name="fade">
                <div v-if="avatarLarge.id === focusedAvatarId" class="profile-avatar-section-inside">

                    <div v-if="avatarLarge.locked">
                        <button>{{ avatarLarge.paidMoneyPrice }}</button><button>{{ avatarLarge.questMoneyPrice
                            }}</button>
                    </div>
                    <button v-else @click="changeSkin(avatarLarge.id)">Use this skin</button>
                </div>
            </Transition>
            <img class="profile-avatar-section-image" :src="require(`@/assets/images/${avatarLarge.src}`)" alt="">
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useAccountStore } from "@/store/modules/AccountStore.js";

export default {
    name: 'OragnismAvatarSelection',
    components: {},
    setup() {
        const accountStore = useAccountStore();
        const focusedAvatarId = ref(null);

        const setFocusedAvatar = (avatarId) => {
            focusedAvatarId.value = avatarId;
        };

        return { accountStore, focusedAvatarId, setFocusedAvatar };
    },
    methods: {
        changeSkin(selectedAvatarId) {
            this.accountStore.updateLargeImage(selectedAvatarId);
            console.log("The selected avatar is : " + selectedAvatarId);
        },
    },
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    animation: fadeIn 0.3s ease-out
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter {
    animation: fadeIn 0.3s;
}

.fade-leave-to {
    animation: fadeOut 0.3s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style>