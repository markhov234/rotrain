<template>
    <div :class="['card-image', variant]">
        <img class="image" :src="imageUrl" />
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
        avatarImgUrl: {
            type: String,
            required: false,
        },
    },
    computed: {
        imageUrl() {
            // Check if avatarImgUrl is provided and then construct the image URL
            if (this.avatarImgUrl) {
                return require(`@/assets/images/${this.avatarImgUrl}`);
            } else {
                // If avatarImgUrl is not provided, return the placeholder URL
                return 'https://placehold.co/69x68';
            }
        }
    }
};
</script>
