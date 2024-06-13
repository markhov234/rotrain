<template>
  <div class="profile">
    <OrganismProfileCard />
    <MoleculeProfileButton />
  </div>
</template>


<script>
import OrganismProfileCard from "@/components/Develop/OrganismProfileCard.vue";
import MoleculeProfileButton from "@/components/Develop/MoleculeProfileButton.vue";
export default {
  name: "ProfileView",
  components: {
    OrganismProfileCard,
    MoleculeProfileButton
  },
  setup() {
  },
};
</script>