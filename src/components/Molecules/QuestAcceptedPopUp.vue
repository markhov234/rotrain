<template>
    <div class="card-quest-popup">
        <router-link class="card-quest-popup-link"
            :to="{ name: 'TrainingDetailView', params: { taskId: questLinkTime.exercisesId } }">Quest
            Details ! -> </router-link>
    </div>
</template>

<script>

export default {
    props: {
        questLinkTime: {
            type: Object,
            required: true,
        },
    },
    methods: {
    },
};
</script>
