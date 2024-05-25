<template>
  <div class="card-section-friends">
    <div v-for="piniaItem in contentItems" :key="piniaItem.id" :class="['card-component friends']">
      <TitleCardFriends :lvl="piniaItem.level" :username="piniaItem.username" />
      <CardImage :avatarImgUrl="piniaItem.smallCardPicture" variant="friends" />
      <CardPetsSection :friendId="piniaItem.id" />
    </div>
  </div>
</template>

<script>
import TitleCardFriends from "../Atoms/TitleCardFriends.vue";
import CardImage from "../Molecules/CardImage.vue";
import CardPetsSection from "../Molecules/CardPetsSection.vue";

export default {
  props: {
    responsePiniaObject: {
      type: Object, // Assuming responsePiniaObject is an array of items
      required: false,
    },
  },
  components: {
    TitleCardFriends,
    CardImage,
    CardPetsSection
  },
  computed: {
    contentItems() {
      if (this.responsePiniaObject.friends) {
        return this.responsePiniaObject.friends;
      } else {
        return [];
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/Organisms/CardComponent.scss";
</style>
