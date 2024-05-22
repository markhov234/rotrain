<template>
  <div :class="['section-card', variantSide]">
    <BannerTitle :titleMainProps="bannerInfo" variant="short" />
    <component :is="cardComponentType" :responsePiniaObject="responsePiniaObject" :variant="cardComponentVariant" />
  </div>
</template>

<script>
import BannerTitle from "../Molecules/BannerTitle.vue";
import CardComponent from "../Organisms/CardComponent.vue";
import CardComponentFriends from "../Organisms/CardComponentFriend.vue";
export default {
  props: {
    variantSide: {
      type: String,
      required: true,
    },
    responsePiniaObject: {
      type: Object,
      required: true,
    },
    bannerInfo: {
      type: Object,
      required: false,
    },
  },
  // data(props) {


  // },
  computed: {
    cardComponentVariant() {
      const cardComponentSide = ['left', 'right', 'middle'].find(substring => this.bannerInfo.variant.includes(substring))
      if (this.bannerInfo && cardComponentSide) {
        return `small ${cardComponentSide} `;
      } else {
        return 'small left';
      }
    },
    contentItems() {
      if (this.responsePiniaObject.friends) {
        return true;
      } else {
        return false;
      }
    },
    cardComponentType() {
      if (this.contentItems) {
        return CardComponentFriends;
      } else {

        return CardComponent;
      }
    },
  },
  components: {
    BannerTitle,
    CardComponent,
  },
};
</script>
