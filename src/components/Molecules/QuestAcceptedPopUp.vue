<template>
    <div class="card-quest-popup">
        <p>{{ questLinkTime.time }}</p>
        <router-link :to="{ name: 'TrainingView', params: { taskId: this.questLinkTime.exercisesId } }">Fetch
            exercises</router-link>

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
