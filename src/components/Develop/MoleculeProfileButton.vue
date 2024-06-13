<template>
    <div class="profile-bottom">
        <ProfilButton button-text="Customize Hero" />
        <ProfilButton button-text="Settings" />
        <ProfilButton button-text="Shop History" />
    </div>
</template>

<script>
import { useAccountStore } from "@/store/modules/AccountStore.js";
import ProfilButton from "@/components/Atoms/ProfilButton.vue";

export default {
    name: 'MoleculeProfileButton',
    components: {
        ProfilButton
    },
    setup() {
        const accountStore = useAccountStore();
        return { accountStore };
    }
};
</script>
