<template>
  <div class="profile">
    <h1>This is an about a Profile Page </h1>
    <ProfileBanner />
  </div>
</template>


<script>
import ProfileBanner from "@/components/Organisms/ProfileBanner.vue";
export default {
  name: "ProfileView",
  components: {
    ProfileBanner,
  },
  setup() {
  },
};
</script>