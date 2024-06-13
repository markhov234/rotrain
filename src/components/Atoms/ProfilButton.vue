<template>
    <button class="profile-button">{{ buttonText }}</button>
</template>

<script>

export default {
    name: 'ProfilButton',
    props: {
        buttonText: {
            type: String,
            default: 'Customize Hero'
        }
    },
    setup() {

    }
};
</script>
