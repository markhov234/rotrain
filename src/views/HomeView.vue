<template>
  <div class="home">
    <HomeLayout :friends-object="friendsStore" :training-quest-object="trainingQuestStore" :news-object="newsStore"
      :banners-object="bannerStore" />
  </div>
</template>

<script>
import HomeLayout from "@/components/HomeLayout.vue";
import { useNewsStore } from "../store/modules/NewsStore.js";
import { useFriendsStore } from "../store/modules/FriendsStore.js";
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
    const friendsStore = useFriendsStore();
    return { newsStore, bannerStore, trainingQuestStore, friendsStore };
  },
};
</script>
