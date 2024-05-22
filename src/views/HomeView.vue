<template>
  <div class="home">
    <HomeLayout :friendsObject="friendsStore" :trainingQuestObject="trainingQuestStore" :newsObject="newsStore"
      :bannersObject="bannerStore" />
    <ProfileBanner />
  </div>
</template>

<script>
import HomeLayout from "@/components/HomeLayout.vue";
import { useNewsStore } from "../store/modules/NewsStore.js";
import { useFriendsStore } from "../store/modules/FriendsStore.js";
import { useTrainingQuestStore } from "../store/modules/TrainingQuestStore.js";
import { useBannerStore } from "../store/modules/BannerStore.js";
import ProfileBanner from "@/components/Organisms/ProfileBanner.vue";

export default {
  name: "HomeView",
  components: {
    HomeLayout,
    ProfileBanner
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
