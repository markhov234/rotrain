<template>
  <div class="card-section-friends">
    <div v-for="piniaItem in contentItems" :key="piniaItem.id" :class="['card-component friends']">
      <TitleCardFriends :lvl="piniaItem.level" :username="piniaItem.username" />
      <CardImage :avatar-img-url="piniaItem.smallCardPicture" variant="friends" />
      <CardPetsSection :friend-id="piniaItem.id" />
    </div>
  </div>
</template>

<script>
import TitleCardFriends from "../Atoms/TitleCardFriends.vue";
import CardImage from "../Molecules/CardImage.vue";
import CardPetsSection from "../Molecules/CardPetsSection.vue";

export default {
  components: {
    TitleCardFriends,
    CardImage,
    CardPetsSection
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    responsePiniaObject: {
      type: Object, // Assuming responsePiniaObject is an array of items
      required: false,
    },
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
