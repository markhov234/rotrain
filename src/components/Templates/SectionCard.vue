<template>
  <div :class="['section-card', variantSide]">
    <BannerTitle :title-main-props="bannerInfo" variant="short" />
    <component :is="cardComponentType" :response-pinia-object="responsePiniaObject" :variant="cardComponentVariant" />
  </div>
</template>

<script>
import BannerTitle from "../Molecules/BannerTitle.vue";
import CardComponent from "../Organisms/CardComponent.vue";
import CardComponentFriends from "../Organisms/CardComponentFriend.vue";
export default {
  components: {
    BannerTitle,
    CardComponent,
  },
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
};
</script>
