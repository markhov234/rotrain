<template>
  <div class="home">
    <HomeLayout :trainingQuestObject="trainingQuestStore" :newsObject="newsStore" :bannersObject="bannerStore" />
  </div>
</template>

<script>
import HomeLayout from "@/components/HomeLayout.vue";
import { useNewsStore } from "../store/modules/NewsStore.js";
import { useTrainingQuestStore } from "../store/modules/TrainingQuestStore.js";
import { useBannerStore } from "../store/modules/BannerStore.js";

export default {
  name: "HomeView",
  components: {
    HomeLayout,
  },
  setup() {
    const bannerStore = useBannerStore();
    const newsStore = useNewsStore();
    const trainingQuestStore = useTrainingQuestStore();
    return { newsStore, bannerStore, trainingQuestStore };
  },
};
</script>
