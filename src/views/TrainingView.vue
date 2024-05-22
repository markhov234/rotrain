<template>
  <div class="training">
    <h1>This is a training room</h1>
    <ProfileBanner />
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <!-- Render exercises here -->
    </div>
  </div>
</template>

<script>
import ProfileBanner from "@/components/Organisms/ProfileBanner.vue";
import { useTrainingQuestExerciseStore } from "@/store/modules/TrainingQuestExerciseStore";

export default {
  name: "TrainingView",
  components: {
    ProfileBanner,
  },
  data() {
    return {
      isLoading: true,
      exercises: [],
    };
  },
  async created() {
    // Access the task ID from the route params
    const taskId = this.$route.params.taskId;
    console.log("Task ID:", taskId);
    // Now you can fetch exercises based on this task ID
    await this.fetchExercisesFromTaskId(taskId);
    this.isLoading = false;
  },
  methods: {
    async fetchExercisesFromTaskId(taskId) {
      const exerciseStore = useTrainingQuestExerciseStore();
      this.exercises = await exerciseStore.getExercisesByQuestId(taskId);
      console.log("Exercises:", this.exercises);
    },
  },
};
</script>
