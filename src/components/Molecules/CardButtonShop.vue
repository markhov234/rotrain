<template>
  <div :class="['card-button-shop']">
    <TitleMain :title-main="cardTitleMainProps" />
    <span> <img src="@/assets/images/shop-icons.svg" alt="SVG Image" /></span>
  </div>
</template>

<script>
import TitleMain from "../Atoms/TitleMain.vue";

export default {
  components: {
    TitleMain,
  },
  props: {
    cardTitleMainProps: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/molecules/bannerTitle.scss";
</style>
