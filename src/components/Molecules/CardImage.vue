<template>
    <div :class="['card-image', variant]">
        <img class="image" src="https://placehold.co/68x68" />
    </div>
</template>

<script>

export default {
    components: {

    },
    props: {
        variant: {
            type: String,
            required: true,
        },
    }
};
</script>
<style lang="scss">
@import "../../assets/scss/molecules/bannerTitle.scss";
</style>
