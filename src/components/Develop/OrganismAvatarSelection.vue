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
                    <div v-if="avatarLarge.locked" class="profile-avatar-button-section">
                        <button class="profile-avatar-button-paid">{{ avatarLarge.paidMoneyPrice }}</button>
                        <button
                            :class="['profile-avatar-button-quest', { 'unlocked': accountStoreMoneyQuest(avatarLarge.id), 'locked': !accountStoreMoneyQuest(avatarLarge.id) }]"
                            @click="updateSkinMoney(avatarLarge.id)">
                            {{ avatarLarge.questMoneyPrice }}
                        </button>
                        <p v-show="notEnoughMoneyQuest">Not enough quest money. You need {{ moneyQuestMissing }} more.
                        </p>
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
    setup() {
        const accountStore = useAccountStore();
        const focusedAvatarId = ref(null);
        const notEnoughMoneyQuest = ref(false);
        const moneyQuestMissing = ref(0);

        const setFocusedAvatar = (avatarId) => {
            focusedAvatarId.value = avatarId;
            notEnoughMoneyQuest.value = false; // Reset when changing focus
            moneyQuestMissing.value = 0; // Reset when changing focus
        };

        const accountStoreMoneyQuest = (avatarId) => {
            const avatar = accountStore.avatars.find(av => av.id === avatarId);
            return accountStore.questMoney >= avatar.questMoneyPrice;
        };

        const updateSkinMoney = (selectedAvatarId) => {
            const result = accountStore.unlockedQuestMoney(selectedAvatarId);
            if (result && result.success === false) {
                notEnoughMoneyQuest.value = true;
                moneyQuestMissing.value = result.moneyMissing;
                console.log('Not enough money:', notEnoughMoneyQuest.value, 'Money missing:', moneyQuestMissing.value);
            } else {
                notEnoughMoneyQuest.value = false;
                moneyQuestMissing.value = 0;
            }
        };

        const changeSkin = (selectedAvatarId) => {
            accountStore.updateLargeImage(selectedAvatarId);
        };

        return {
            accountStore,
            focusedAvatarId,
            setFocusedAvatar,
            notEnoughMoneyQuest,
            moneyQuestMissing,
            updateSkinMoney,
            changeSkin,
            accountStoreMoneyQuest
        };
    }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    animation: fadeIn 0.3s ease-out;
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
