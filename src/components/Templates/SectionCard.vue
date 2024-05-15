<template>
  <div :class="['section-card', variantSide]">
    <BannerTitle :titleMainProps="bannerInfo" variant="short" />
    <CardComponent :responsePiniaObject="responsePiniaObject" :variant="cardComponentVariant" />
  </div>
</template>

<script>
import BannerTitle from "../Molecules/BannerTitle.vue";
import CardComponent from "../Organisms/CardComponent.vue";
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
  computed: {
    cardComponentVariant() {
      const cardComponentSide = ['left', 'right', 'middle'].find(substring => this.bannerInfo.variant.includes(substring))
      if (this.bannerInfo && cardComponentSide) {
        return `small ${cardComponentSide} `;
      } else {
        return 'small left';
      }
    },
  },
  components: {
    BannerTitle,
    CardComponent,
  },
};
</script>
